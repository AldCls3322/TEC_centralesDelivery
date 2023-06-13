import { useState } from "react";
import styled from "styled-components";
import { TabItem } from "./TabItem";

export const Tabs = ({ list, activeTab, onTabSwitch}) => {
    let active = activeTab === '' ? list[0] : activeTab;
    console.log(active);
    return (
        <Container>
            <Wrapper>
                {list.map((item, index) => {
                    return (
                        <TabItem 
                            title={item}
                            key={index}
                            index={index}
                            active={active === item}
                            setActive={onTabSwitch}
                        />
                    )
                })}
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    /* Positioning */
    position: sticky;

    /* Display & Box Model | Sizing */
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 8%;

    /* Color, Background & Text */
    background: transparent;
    color: ${( { theme } ) => theme.color9};

    /* Animations and Other */
`

const Wrapper = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    padding-left: 2%;
    padding-right: 2px;

    /* Color, Background & Text */
    border-bottom: solid ${( { theme } ) => theme.color5};

    /* Animations and Other */
    //className="container mx-auto py-2 border-b-gray-400 border-b-1"
`