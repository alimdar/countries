export namespace Countries {

    type CountryTitle = {
        name: string,
        flag: string,
        alpha2Code: string,
    }
    type Holiday = {
        name: string,
        date: string,
    }

    type Country = {
        name: string,
        capital: string,
        flag: string,
        region: string,
        countryCode: number,
        area: number,
        population: number,
        timezones: string[],
        holidays?: Holiday[]
    }
}
