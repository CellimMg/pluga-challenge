import React, {useState} from "react";
import styled, {css} from "styled-components";

interface MenuButtonProps {
    isActive: boolean;
    onClick: () => void;
}

export default function MenuButton({isActive, onClick}: MenuButtonProps) {

    return (
        <Button onClick={onClick}>
            <MenuBar active={isActive}/>
            <MenuBar active={isActive}/>
            <MenuBar active={isActive}/>
        </Button>
    );
}

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30px;
    height: 24px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
   
    @media (min-width: 900px) {
        display: none;
    }
`;

const MenuBar = styled.div.attrs((props: { active: boolean }) => ({
    active: props.active
}))`
    width: 100%;
    height: 4px;
    background-color: #0ea7ff;
    border-radius: 20px;
    transform: translateY(-50%);
    transition: transform 0.3s ease-out;

    &:nth-child(1) {
        ${({active}) =>
    active &&
    css`
                transform: rotate(45deg) translate(7px, 7px);
            `}
    }
    
    &:nth-child(2) {
         ${({active}) =>
    active &&
    css`
                opacity: 0;
            `}
    }
    
    &:nth-child(3) {
        ${({active}) =>
    active &&
    css`
                transform: rotate(-45deg) translate(7px, -7px);
            `}
    }
`;
