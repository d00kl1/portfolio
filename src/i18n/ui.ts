
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
    'nav.contact': 'Contact'
  },
  ml: {
    'nav.home': 'പ്രധാന താൾ',
    'nav.description': 'ഹരികൃഷ്ണന്‍ വർമ്മ',
    'nav.paintings': 'പെയിന്റിംഗ്',
    'nav.drawings': 'ഡ്രാവിംഗ്',
    'nav.manga': 'മാങ്ങ',
    'nav.tear-jerk': 'ടീർ ജെർക്',
    'nav.the-unfinishable-one': 'ദുര്ബലമായ ഒരു കഥ',
    'nav.enter-ish-kish': 'എൻറർ ഇഷ് കിഷ്',
    'nav.music': 'സംഗീതം',
    'nav.about': 'കുറച്ചുവിവരങ്ങൾ',
    'nav.contact': 'സമ്പരക്കമുള്ളവർ',
  },
} as const;