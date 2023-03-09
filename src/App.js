import {Route, Routes} from "react-router-dom";


import './App.css';
import Layout from "./Layout/Layout";
import Characters from "./components/Characters/Characters";


function App() {

    return (
        <div className="app">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Characters/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
