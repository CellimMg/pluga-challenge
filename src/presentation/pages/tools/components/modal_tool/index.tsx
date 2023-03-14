import React from "react";
import styled from "styled-components";
import {Tool} from "../../../../../domain/entities/tool_entity";

export default function ModalTool({tool, last, onCloseModal}: { tool: Tool, last: Tool[], onCloseModal: () => void }) {

    const handleClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    }

    function onClickAcessar() {
        window.open(tool.link, "_blank");
    }

    return (
        <Container onClick={onCloseModal}>
            <Content onClick={handleClick}>
                <InfoTool>
                    <img src={tool.icon}/>
                    <RightInfo>
                        <h1>{tool.name}</h1>
                        <ButtonAcessar onClick={onClickAcessar}>Acessar</ButtonAcessar>
                    </RightInfo>
                </InfoTool>

                <BottonInfo>
                    <h2>Últimas ferramentas visualizadas</h2>
                    <LastTools>
                        {last.map((tool, index) => (
                            <LastToolItem>
                                <img src={tool.icon}></img>
                                <div><span>{tool.name}</span></div>
                            </LastToolItem>
                        ))}
                    </LastTools>
                </BottonInfo>
            </Content>
        </Container>
    );
}


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
   border-radius: 10px;
   width: 480px;
   height: 400px;
   background: white;
   display: flex;
   padding: 50px 50px;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const InfoTool = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    
    img{
        width: 120px;
        height: 120px;
    }
`;


const RightInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
    height: 100%;
    width: 200px;
    
   
    h1{
        font-size: 20px;
        font-weight: bold;
        color: #9e9e9e;      
    }
    
`;

const ButtonAcessar = styled.button`
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background-color: #33d40c;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    
    &:hover {
        background: #2dbb0a;
    }
`;


const BottonInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
    height: 250px;
    width: 100%;
    
    h2{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 30px;
        color: #9e9e9e;
    }
`;


const LastTools = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
`;

const LastToolItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    height: 120px;
    border-radius: 10px;
    img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
    
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        text-align: center;
        font-size: 16px;
        color: #9e9e9e;
        font-weight: 600;
      }
    }`;