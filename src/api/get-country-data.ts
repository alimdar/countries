export const countryData = (country):Promise<string | any> => new Promise((resolve, reject) => {
    const baseUrl = `https://restcountries.eu/rest/v2/alpha/${country}`;
    fetch(baseUrl)
        .then((response) => response.json())
        .then((res) => {
            if (res.status === 404) {
                reject("Error fetching country: " + res.message)
            } else {
                resolve(res);
            }
        })
});
