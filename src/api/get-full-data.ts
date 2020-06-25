import {countryHolidays} from "./get-country-holidays";
import {countryData} from "./get-country-data";
import {mapCountryData} from "./mapper";
import {Countries} from "../types/types";

declare interface PromiseConstructor {
    allSettled(promises: Array<Promise<any>>):
        Promise<Array<{ status: 'fulfilled' | 'rejected', value?: any, reason?: any }>>;
}

function getFullCountryData(country: string):Promise<Countries.Country | string> {
    return new Promise((resolve, reject) => {
        (Promise as unknown as PromiseConstructor)
            .allSettled([countryData(country), countryHolidays(country)])
            .then((res) => {
                resolve(mapCountryData(res))
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export default getFullCountryData;
