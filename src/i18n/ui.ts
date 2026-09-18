
export const languages = {
  en: { short: 'EN', name: 'English' },
  ml: { short: 'മ', name: 'മലയാളം' },
} as const;

export type Locale = keyof typeof languages;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',    
    'nav.description': 'Harikrishnan Varma',
    'nav.paintings': 'Paintings',
    'nav.drawings': 'Drawings',
    'nav.manga': 'Manga',
    'nav.tear-jerk': 'Tear Jerk',
    'nav.the-unfinishable-one': 'The Unfinishable One',
    'nav.enter-ish-kish': 'Enter Ish-Kish',
    'nav.music': 'Music',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'contact.intro': 'A few ways to reach out:',
    'about.intro': "I'm Harikrishnan."
  },
  ml: {
    'nav.home': 'പ്രധാന താൾ',
    'nav.description': 'ഹരികൃഷ്ണന്‍ വർമ്മ',
    'nav.paintings': 'ചിത്രരചനകൾ',
    'nav.drawings': 'രേഖാചിത്രങ്ങൾ',
    'nav.manga': 'മാംഗ',
    'nav.tear-jerk': 'കരച്ചി പാപ്പി',
    'nav.the-unfinishable-one': 'തീർക്കാനാവാത്തത്',
    'nav.enter-ish-kish': 'ഇഷ്-കിഷിന്റെ ആഗമനം',
    'nav.music': 'സംഗീതം',
    'nav.about': 'എന്നെക്കുറിച്ച്',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'contact.intro': 'ബന്ധപ്പെടാനുള്ള വഴികൾ:',
    'about.intro': 'ഞാൻ ഹരികൃഷ്ണൻ.'
  },
} as const;