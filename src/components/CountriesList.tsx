import React, {useEffect, useState} from "react";
import getCountriesPerRegion from "../api/get-countries-per-region";
import styled from "styled-components";
import {Countries} from "../types/types";
import {Regions} from "../types/enum";

interface Props {
    region: Regions,
    selectCountry(countryCode: string):void,
}

const CountriesList = ({selectCountry, region}:Props) => {

    const [list, setList] = useState([] as Countries.CountryTitle[]);

    useEffect(() => {
        region && getCountriesPerRegion(region)
            .then((res) => {
                setList(res as Countries.CountryTitle[]);
            })
    }, [region]);

    return (
        <Wrapper>
            {list.map((country:Countries.CountryTitle) => (
                <Country key={country.name}
                         onClick={() => selectCountry(country.alpha2Code)}>
                    <Flag src={country.flag}/>
                    <div>{country.name}</div>
                </Country>
            ))}
        </Wrapper>
    )
};
export default CountriesList;

const Country = styled.div`
    font-size: 13px;
    height: 30px;
    font-weight: 200;
    color: black;
    display:flex;
    cursor:pointer;
    &:hover {
        text-decoration:underline
    }
`;
export const Flag = styled.img`
    width: 22px;
    height: 16px;
    margin-right: 10px
`;
const Wrapper = styled.div`
    overflow-y:auto;
    width: 350px;
    margin-right: 30px;
    border-right: 1px solid lightgray;
`;
