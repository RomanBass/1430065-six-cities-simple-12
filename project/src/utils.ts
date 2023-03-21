export const convertMarkToPercents = (rating: number): string => `${rating * 20}%`;
export const convertJSDateToISO = (jsDate: string): string => (new Date(jsDate)).toISOString().substring(0, 10);
export const convertJSDateToMothYear = (jsDate: string): string => `${(new Date(jsDate)).toLocaleString('en', { month: 'long' })} ${(new Date(jsDate)).toISOString().substring(8, 10)}`;
