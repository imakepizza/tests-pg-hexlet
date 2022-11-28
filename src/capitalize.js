export const capitalize = (text) => {
  if(text.length === 0) return '';
  const [firstSymbol = '', ...restSymbols] = text;
  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};