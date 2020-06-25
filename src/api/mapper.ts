import {Countries} from "../types/types";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const mapCountriesPerRegion = (country):Countries.CountryTitle => ({
    name:country.name,
    flag: country.flag,
    alpha2Code: country.alpha2Code
});

export let countryObj: Countries.Country = {
    name: "",
    capital: "",
    flag: "",
    region: "",
    countryCode: 0,
    area: 0,
    timezones: [],
    population: 0,
    holidays: undefined
};

export const mapCountryData = (data):Countries.Country => {
    if (data[0].status === 'fulfilled') {
        const {
            name,
            capital,
            alpha2Code: countryCode,
            area,
            flag,
            region,
            timezones,
            population,
        } = data[0].value;

        countryObj = {
            name,
            capital,
            countryCode,
            area,
            flag,
            region,
            timezones,
            population
        };
        if (data[1].status === "fulfilled") {
            countryObj.holidays = data[1].value.map((item) => createHoliday(item))
        }
    }
    return countryObj;
};
const createHoliday = (holiday):Countries.Holiday => ({
    date: `${months[new Date(holiday.date).getMonth()]} ${new Date(holiday.date).getDate()}`,
    name: holiday.name
});

