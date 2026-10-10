export interface AmazonStore {
  countryCode: string;
  flag: string;
  countryName: string;
  storeName: string;
  formats: string;
  url: string;
  region: 'Europe' | 'Rest of the World';
}

export const EUROPE_STORES: AmazonStore[] = [
  {
    countryCode: 'GB',
    flag: '🇬🇧',
    countryName: 'United Kingdom',
    storeName: 'Buy from Amazon UK',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.co.uk/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'DE',
    flag: '🇩🇪',
    countryName: 'Germany',
    storeName: 'Buy from Amazon Germany',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.de/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'FR',
    flag: '🇫🇷',
    countryName: 'France',
    storeName: 'Buy from Amazon France',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.fr/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'IT',
    flag: '🇮🇹',
    countryName: 'Italy',
    storeName: 'Buy from Amazon Italy',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.it/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'ES',
    flag: '🇪🇸',
    countryName: 'Spain',
    storeName: 'Buy from Amazon Spain',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.es/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'NL',
    flag: '🇳🇱',
    countryName: 'Netherlands',
    storeName: 'Buy from Amazon Netherlands',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.nl/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'PL',
    flag: '🇵🇱',
    countryName: 'Poland',
    storeName: 'Buy from Amazon Poland',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.pl/dp/B0D7M4K284',
    region: 'Europe',
  },
  {
    countryCode: 'SE',
    flag: '🇸🇪',
    countryName: 'Sweden',
    storeName: 'Buy from Amazon Sweden',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.se/dp/B0D7M4K284',
    region: 'Europe',
  },
];

export const WORLD_STORES: AmazonStore[] = [
  {
    countryCode: 'US',
    flag: '🇺🇸',
    countryName: 'United States',
    storeName: 'Buy from Amazon US',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.com/dp/B0D7M4K284',
    region: 'Rest of the World',
  },
  {
    countryCode: 'CA',
    flag: '🇨🇦',
    countryName: 'Canada',
    storeName: 'Buy from Amazon Canada',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.ca/dp/B0D7M4K284',
    region: 'Rest of the World',
  },
  {
    countryCode: 'AU',
    flag: '🇦🇺',
    countryName: 'Australia',
    storeName: 'Buy from Amazon Australia',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.com.au/dp/B0D7M4K284',
    region: 'Rest of the World',
  },
  {
    countryCode: 'JP',
    flag: '🇯🇵',
    countryName: 'Japan',
    storeName: 'Buy from Amazon Japan',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.co.jp/dp/B0D7M4K284',
    region: 'Rest of the World',
  },
];

export const IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKPt48O95C1jCUFYrpgPVRZ9oFcwCp-HlsqYqJhE9dz9LkmZ30KW41FOCR40qZa0iYE4AjaftTK6e2Z-uoyKmcpdOzHjgk4wW-qDsFZDMs2gzYfygnNvI2KAKjreQziJNWmr9pn_8Uj-vVv5HyvKB4V-AwZvC1lp9s9LvMbKs4nb1qqcg4Vt2YrAnIcxYqK-F-qxOZb0Js1QQMi7DhKKb6GS2JRaa6-qjMvx_APYbKDBrs8ontwNXtY-SQuaU3pR4JLA',
  author: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxIKH48tl_Dl2UB_cj21FSp-9q0mTIlvZJy2abxOPrB3Kj-oJSGIqZGknpvDQ5smQE7uKvoyWTS_jpzMVHYFUASjvQiCWHV3q1yvOiFqWUJnYZDmXk6tB-1DXw8yYvg9x0EuMPSRqXQbWaYC6NcRi29wOF2DZnsfkmaw2FQ54RpRqv-bkOQrdu5DzSq8CH3RR3bMi8levX744bnByxcFZ-i1Co-0CcowyguBxTOmpMWdz3QwTKbZd26-P8SpxxJRcqTw',
  bookEnglish: 'https://lh3.googleusercontent.com/aida/AEtjO1XetkI8f_ptDLhazWSZjyMZy_Yn2AuVwqT38nVubbfBBxrC1NwF9jF6yw4QNcXEkClLA3OHSbk4SjFzqxrHvtWbfqt25P6t4t8Llgt5mV5ypSyKG3kCKus3Pozzw2hDP3boo38LNwmY6bMaRB1snWAL6rqvyTRK0_eSLn_2QpbgtuBoD_cPiA4z7keucOvMoazFx-xter0JNOe5SDr0uc6HLJnT2_J3519KpEpdrP1dyN1j8qi0IcPcaXqjRG62zPy4HJ8yNjL1rQ',
  bookCroatian: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg-VqxeKoSnGs8bAXzNBS9RDgzvV3o0vjZ6hbYo_Nr9lYij6ZmTwKQ2N22e2C4jY9ry8OnasemfB-VthbbprVE9ygR70JQ-0G8t_eT3VxDP4I1N4l5lvzq85242dRzS_SSTCaQj7LGLs7z9QCOZw9GjDDrbdz-tK6uLhjxuxoqo_KeumkmIz-5Nu9F3rLFBPsZWmBLFR0wKYeTzGZsHBd7zFqqjAroNgSpPzFGZwEeOH3M8DWUR-K-hp9KDORhEwb7MA',
};
