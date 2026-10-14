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
    url: 'https://www.amazon.co.uk/dp/B0FPGQ2QY8',
    region: 'Europe',
  },
  {
    countryCode: 'DE',
    flag: '🇩🇪',
    countryName: 'Germany',
    storeName: 'Buy from Amazon Germany',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.de/dp/B0FPGQ2QY8',
    region: 'Europe',
  },
  {
    countryCode: 'FR',
    flag: '🇫🇷',
    countryName: 'France',
    storeName: 'Buy from Amazon France',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.fr/dp/B0FPGQ2QY8',
    region: 'Europe',
  },
  {
    countryCode: 'IT',
    flag: '🇮🇹',
    countryName: 'Italy',
    storeName: 'Buy from Amazon Italy',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.it/dp/B0FPGQ2QY8',
    region: 'Europe',
  },
  {
    countryCode: 'ES',
    flag: '🇪🇸',
    countryName: 'Spain',
    storeName: 'Buy from Amazon Spain',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.es/dp/B0FPGQ2QY8',
    region: 'Europe',
  },
  {
    countryCode: 'NL',
    flag: '🇳🇱',
    countryName: 'Netherlands',
    storeName: 'Buy from Amazon Netherlands',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.nl/dp/B0FPGQ2QY8',
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
    url: 'https://www.amazon.com/dp/B0FPGQ2QY8',
    region: 'Rest of the World',
  },
  {
    countryCode: 'CA',
    flag: '🇨🇦',
    countryName: 'Canada',
    storeName: 'Buy from Amazon Canada',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.ca/dp/B0FPGQ2QY8',
    region: 'Rest of the World',
  },
  {
    countryCode: 'AU',
    flag: '🇦🇺',
    countryName: 'Australia',
    storeName: 'Buy from Amazon Australia',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.com.au/dp/B0FPGQ2QY8',
    region: 'Rest of the World',
  },
  {
    countryCode: 'MX',
    flag: 'mx',
    countryName: 'Mexico',
    storeName: 'Buy from Amazon Mexico',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.com.mx/dp/B0FPGQ2QY8',
    region: 'Rest of the World',
  },
  {
    countryCode: 'BR',
    flag: 'br',
    countryName: 'Brazil',
    storeName: 'Buy from Amazon Brazil',
    formats: 'Paperback & Kindle',
    url: 'https://www.amazon.com.br/dp/B0FPGQ2QY8',
    region: 'Rest of the World',
  },
];

export const IMAGES = {
  logo: './akurulab-watercolor-logo.jpg',
  author: './author-milena.jpg',
  bookEnglish: './book-cover-english.png',
  bookCroatian: './book-cover-croatian.png',
  journey: './A Life Journey in Watercolour_v5.jpg',
};
