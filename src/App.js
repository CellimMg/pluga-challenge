import './App.css';
import {GlobalStyle} from './utils/global_style.ts';
import BaseScreen from "./presentation/commom/base_screen";
function App() {
    return (
        <>
            <GlobalStyle/>

            <BaseScreen></BaseScreen>
        </>
    );
}

export default App;
