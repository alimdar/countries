import {countriesDetails} from "./countries-data";
import {holidays} from "./holidays";
import {mapCountryData} from "../api/mapper";

const result = [{
        status: "fulfilled",
        value: countriesDetails
    },
    {
        status: "fulfilled",
        value: holidays
    }];

const getFullData = (region) => {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            if(region === 'Americas'){
                return resolve(mapCountryData(result))
            } else {
                return reject({error: "Error fetching data"})
            }
        })
    })
};
export default getFullData;
