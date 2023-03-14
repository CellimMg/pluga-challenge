import React from "react";
import styled from "styled-components";
import logo from "../../../../../utils/assets/images/logo.png";
import iconSearch from "../../../../../utils/assets/icons/icon_search.png";
import MenuButton from "../menu_button";

export default function AppBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const plugaSignIn: string = "https://manage.pluga.co/login";
    const plugaSignUp: string = "https://manage.pluga.co/#/signup?lang=pt_BR";

    const redirectOnClick = (url: string) => {
        window.open(url, "_blank");
    }

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <Bar>
                <Row>
                    <a href="/"><Logo src={logo}></Logo></a>
                </Row>

                <RowButtons>
                    <ButtonSignIn onClick={() => redirectOnClick(plugaSignIn)}>ENTRAR</ButtonSignIn>
                    <ButtonSignUp onClick={() => redirectOnClick(plugaSignUp)}>CADASTRAR</ButtonSignUp>
                </RowButtons>
                <MenuButton onClick={handleMenuClick} isActive={isMenuOpen}/>
            </Bar>
            <Menu active={isMenuOpen}>
                <ButtonSignIn activeMenu={isMenuOpen} onClick={() => redirectOnClick(plugaSignIn)}>ENTRAR</ButtonSignIn>
                <ButtonSignUp activeMenu={isMenuOpen} onClick={() => redirectOnClick(plugaSignUp)}>CADASTRAR</ButtonSignUp>
            </Menu>
        </>
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
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
`;

const ButtonSignIn = styled.button.attrs((props: { activeMenu: boolean }) => ({
    activeMenu: props.activeMenu
}))`
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
    
    @media (max-width: 900px) {
        display: ${props => props.activeMenu ? "block" : "none"};
    }
`;

const ButtonSignUp = styled.button.attrs((props: { activeMenu: boolean }) => ({
    activeMenu: props.activeMenu
}))`
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background-color: #33d40c;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    
    @media (max-width: 900px) {
        display: ${props => props.activeMenu ? "block" : "none"};
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RowButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 900px) {
        display: none;
    }
`;

const Menu = styled.div.attrs((props: { active: boolean }) => ({
    active: props.active
}))`
    display: none;
    height: ${props => props.active ? "150px" : "0"};
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: height 0.2s;
    
    @media (min-width: 900px) {
        display: none;
    }
`;
