import React from "react";
import styled from "styled-components";
import {Regions} from "../types/enum";

interface Props {
    selectRegion(region:Regions):void
}

const RegionList = ({selectRegion}:Props) => {
    return (
        <Wrapper>
            {Object.keys(Regions).map((region) => (
                <Region key={Regions[region]}
                        onClick={() => selectRegion(Regions[region])}>
                    {Regions[region]}
                </Region>
            ))}
        </Wrapper>
    )
};

export default RegionList;
const Wrapper = styled.div`
    width: 120px;
    height: 100%;
    margin-right: 30px;
    border-right: 1px solid lightgray;
`;
const Region = styled.div`
    cursor: pointer;
    height: 36px;
    width: 75px;
    &:hover {
        opacity: 0.7
    }
`;
