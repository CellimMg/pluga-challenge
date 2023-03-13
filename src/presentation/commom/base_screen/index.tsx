import React from "react";
import AppBar from "./components/app_bar";
import styled from "styled-components";

interface BaseScreenProps {
    children: React.ReactNode;
}

export default function BaseScreen({children}: BaseScreenProps) {
    return (
        <>
            <AppBar></AppBar>
            <Body>
                {children}
            </Body>
        </>
    );
}


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100% - 100px); // 100px is the height of the app bar
    padding: 0 80px;
    background-color: white;
    overflow: auto;
`;