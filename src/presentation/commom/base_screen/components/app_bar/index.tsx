import React from "react";
import styled from "styled-components";
import logo from "../../../../../utils/assets/images/logo.png";
import iconSearch from "../../../../../utils/assets/icons/icon_search.png";
import { Link } from 'react-router-dom';


export default function AppBar() {

    const plugaSignIn: string = "https://manage.pluga.co/login";
    const plugaSignUp: string = "https://manage.pluga.co/#/signup?lang=pt_BR";

    const redirectOnClick = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <Bar>
            <Row>
                <a href="/"><Logo src={logo}></Logo></a>
                <Search>
                    <Input type="text" placeholder="Buscar mais de 80 ferramentas"></Input>
                </Search>
            </Row>

            <Row>
                <ButtonSignIn onClick={() => redirectOnClick(plugaSignIn)}>ENTRAR</ButtonSignIn>
                <ButtonSignUp onClick={() => redirectOnClick(plugaSignUp)}>CADASTRAR</ButtonSignUp>
            </Row>
        </Bar>
    );
}


//create a styled appbar
const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 80px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-bottom: solid 1px #f5f5f5;
`;

const Logo = styled.img`
    height: 110px;
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 50px;
    padding: 0 20px 0 50px;
    border: solid 1px grey;
    border-radius: 10px;
    background-image: url(${iconSearch});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 20px;
    margin-left: 50px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
`;

const ButtonSignIn = styled.button`
    width: 100px;
    height: 40px;
    border: solid 2px #5b7180;
    outline: none;
    border-radius: 40px;
    background-color: #fff;
    color: #5b7180;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5px;
`;

const ButtonSignUp = styled.button`
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background-color: #33d40c;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
