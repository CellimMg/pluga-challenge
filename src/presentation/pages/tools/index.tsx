import React, { useEffect } from "react";
import BaseScreen from "../../commom/base_screen";
import {ToolUsecases} from "../../../domain/usecases/tool_usecases";
import {makeToolUsecases} from "../../../factories/usecases/tool_usecase_factory";
import {Tool} from "../../../domain/entities/tool_entity";
import styled from "styled-components";
import ModalTool from "./components/modal_tool";
import iconSearch from "../../../utils/assets/icons/icon_search.png";
import Pagination from "./components/pagination";


export default function ToolsPresentation() {

    const toolsUseCase: ToolUsecases = makeToolUsecases();

    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setitemsPerPage] = React.useState(12);
    const [lastSeenTools, setLastSeenTools] = React.useState<Tool[]>([]);
    const [toolsPresented, setToolsPresented] = React.useState<Tool[]>([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [toolSelected, setToolSelected] = React.useState<Tool>();
    const [search, setSearch] = React.useState("");
    const [tools, setTools] = React.useState<Tool[]>([]);


    const handlePageClick = (pageNumber: number) => {
        const aux = tools.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
        const aux2 = aux.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase()));
        setCurrentPage(pageNumber);
        setToolsPresented(aux2);
    }

    const handleInputChange = (event: any) => {
        setCurrentPage(1);
        const { value } = event.target;
        const aux = tools.filter(tool => tool.name.toLowerCase().includes(value.toLowerCase()));
        const aux2 = aux.slice((1 - 1) * itemsPerPage, 1 * itemsPerPage);
        setSearch(value);
        setToolsPresented(aux2);
    }

    function handleLastTools(tool: Tool) {
        const aux = lastSeenTools;
        if(!aux.some(toolAux => toolAux.id === tool.id)) {
            aux.unshift(tool);
        }

        if (aux.length > 3) {
             aux.pop();
        }

        setLastSeenTools(aux);
    }

    function onSelectTool(tool: Tool) {
        handleLastTools(tool);
        setToolSelected(tool);
        setOpenModal(true);
    }

    function onCloseModal() {
        setOpenModal(false);
    }


    useEffect(() => {
        toolsUseCase.getTools().then((tools) => {;
            setTools(tools);
            setToolsPresented(tools.slice(0, itemsPerPage));
        });
    }, []);


    return (
        <>
            {openModal ?
                <ModalTool onCloseModal={onCloseModal} tool={toolSelected} last={lastSeenTools}></ModalTool> : null}
            <BaseScreen>
               <TopPage>
                   <SearchToolBar>
                       <InputSearch  value={search} onChange={handleInputChange}  type="text" placeholder="Buscar ferramenta"></InputSearch>
                   </SearchToolBar>
               </TopPage>
                <Wrapper>
                    {toolsPresented.length > 0 ? <ToolsList>
                        {toolsPresented.map((tool, index) => (
                            <ToolItem onClick={() => onSelectTool(tool)}>
                                <img src={tool.icon}></img>
                                <div><span>{tool.name}</span></div>
                            </ToolItem>))
                        }
                    </ToolsList> : <NoDatafound>Nenhuma ferramenta encontrada!</NoDatafound>}
                </Wrapper>
                <Pagination paginate={handlePageClick} itemsPerPage={itemsPerPage} totalItems={tools.length} currentPage={currentPage}></Pagination>
            </BaseScreen>
        </>
    );
}

const TopPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    width: 100%;
    height: 80px;
`;

const NoDatafound = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const SearchToolBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 60px;
    padding: 0 20px 0 50px;
    border: solid 1px grey;
    border-radius: 10px;
    background-image: url(${iconSearch});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 20px;
`;

const InputSearch = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
`;

const Wrapper = styled.div`
    height: calc(100% - 280px);
    overflow-y: auto;
`;

const ToolsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    padding: 0 80px;
    background-color: white;
    overflow: auto;
    
    //remove scroll bar
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const ToolItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin: 15px 15px;
    border: 2px solid #9e9e9e;
    padding: 10px;
  
    img {
        margin-top: 15px;
        width: 60px;
        height: 60px;
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
    }
    
    &:hover {
        border: 2px solid #333333;
        cursor: pointer;
    }
`;






