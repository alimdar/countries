const countries = [
  {
    name: "One",
    flag: "flag.svg",
    alpha2Code: 333
  },
  {
    name: "Two",
    flag: "flag.svg",
    alpha2Code: 333
  },
  {
    name: "Three",
    flag: "flag.svg",
    alpha2Code: 333
  },
];

const getCountriesPerRegion = (region) => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      region === 'Americas' ? resolve(countries) : reject({error: "Error fetching countries"})
    )
  })
};

export default getCountriesPerRegion
