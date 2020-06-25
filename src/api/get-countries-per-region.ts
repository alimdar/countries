import {Regions} from "../types/enum";
import {Countries} from "../types/types";
import {mapCountriesPerRegion} from "./mapper";

function getCountriesPerRegion(region:Regions):Promise<string | Countries.CountryTitle[]>{

    const baseUrl = `https://restcountries.eu/rest/v2/region/${region}`;

    return new Promise((resolve, reject) => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((res) => {
                if(res.status === 404){
                    reject("Error fetching region: " + res.message)
                } else {
                    resolve(res.map((country) => mapCountriesPerRegion(country)));
                }
            })
    })
}
export default getCountriesPerRegion;
