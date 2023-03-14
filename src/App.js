import './App.css';
import {GlobalStyle} from './utils/global_style.ts';
import ToolsPresentation from "./presentation/pages/tools/index";



function App() {
    return (
        <>
            <GlobalStyle/>

            <ToolsPresentation></ToolsPresentation>
        </>
    );
}

export default App;
