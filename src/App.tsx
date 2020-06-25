import React, {useState} from "react";
import RegionList from "./components/RegionList";
import CountriesList from "./components/CountriesList";
import styled from "styled-components";
import Country from "./components/Country";
import {Regions} from "./types/enum";

const App = () => {
    const [region, setRegion] = useState(Regions.Africa);
    const [countryCode, setCountryCode] = useState("");

    return (
        <Wrapper>
            <RegionList selectRegion={(region) => setRegion(region)}/>
            <CountriesList selectCountry={(code) => setCountryCode(code)} region={region}/>
            {countryCode && <Country countryCode={countryCode}/>}
        </Wrapper>
    )
};
export default App;
const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 100px);
`;
