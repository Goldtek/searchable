export const getSearchRegEx = (text: string) => {
  const parts = text
    .trim()
    .split(/[^A-Za-z0-9]+/)
    .map((part) => `\\b${part}`);
  return new RegExp(`(${parts.join('|')})`, 'ig');
};

export const countryFilter = (search: string) => {
  const regex = getSearchRegEx(search);
  return (country) =>
    regex.test(`${country.name || ''}`) || regex.test(`${country.alpha3Code}`);
};
