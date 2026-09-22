// functions/api/subscribe.ts

interface Env {
  MAILERLITE_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;

    // Parse incoming request body
    const body = await request.json() as { email?: string; name?: string };

    if (!body.email) {
      return new Response(
        JSON.stringify({ message: 'Email address is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!env.MAILERLITE_API_KEY) {
      return new Response(
        JSON.stringify({ message: 'Server environment misconfigured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Forward subscriber details securely to MailerLite API
    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: body.email,
        fields: {
          name: body.name || '',
        },
      }),
    });

    const mlData = await mlResponse.json() as { message?: string };

    if (!mlResponse.ok) {
      return new Response(
        JSON.stringify({ message: mlData.message || 'Failed to process subscription.' }),
        { status: mlResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Subscribed successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};