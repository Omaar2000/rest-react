export const getCountryDetails = async (id) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  return res.json();
};
