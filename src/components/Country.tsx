import React, {useEffect, useState} from "react";
import getFullCountryData from "../api/get-full-data";
import styled, { keyframes }from "styled-components";
import {Flag} from "./CountriesList";
import {countryObj} from "../api/mapper";
import {Countries} from "../types/types";

const Country = ({countryCode}:any) => {

    const [data, setData] = useState(countryObj);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getFullCountryData(countryCode)
            .then((res) => {
                setData(res as Countries.Country);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            })
    }, [countryCode]);

    return (
        <>
            {loading ?
                <Loader/> :
                <div>
                    {error ?
                        <ErrorMessage>Error loading country data</ErrorMessage> :
                            <CountryData>
                                <Flex><Flag src={data.flag}/><Name>{data.name}</Name></Flex>
                                <Info>Capital: {data.capital}</Info>
                                <Info>Region: {data.region}</Info>
                                <Info>Population: {data.population}</Info>
                                <Info>Area: {data.area}</Info>
                                <Info>Timezone: {data.timezones.join(", ")}</Info>

                                {data.holidays &&
                                    <Holidays>
                                        {data.holidays.map((holiday) => (
                                            <div>
                                                <b>{holiday.name}</b> on <b>{holiday.date}</b>
                                            </div>
                                        ))}
                                    </Holidays>
                                }
                            </CountryData>
                    }
                </div>
            }
        </>
    )
};
export default Country;

const animation = keyframes`
0% {transform: perspective(120px) rotateX(0deg) rotateY(0deg)} 
50% {transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)}
100% {transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}`;

const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 6px solid;
  border-color: lightgray;
  margin: 100px auto;
  animation: ${animation} 1.2s infinite ease-in-out;
`;
const ErrorMessage = styled.div`
    color: #ff6d6d;
`;
const CountryData = styled.div`
    width: 650px;
    padding-bottom:20px;
    height: 100%;
    overflow-y: auto;
`;
const Name = styled.div`
    margin: 0 0 30px 0; 
`;
const Info = styled.div`
    font-size: 14px;
    font-weight: 100;
    color: black;
    margin: 3px 0;
`;
const Flex = styled.div`
    display:flex;
`;
const Holidays = styled.div`
    margin-top: 30px;
    font-size: 13px;
    font-weight: 100;
    color: #989898;
    line-height: 20px
`;
