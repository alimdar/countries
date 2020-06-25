export const countryHolidays = (countryCode: string):Promise<string | any> => new Promise((resolve, reject) => {
    const url = `https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v2/publicholidays/2020/${countryCode}`;
    fetch(url)
        .then((response) => response.json())
        .then((res) => {
            if (res.status === 404) {
                reject("Error fetch holidays" + res.message)
            } else {
                resolve(res)
            }
        })
});
