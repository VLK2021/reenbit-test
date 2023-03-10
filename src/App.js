import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Characters from "./components/Characters/Characters";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Auth from "./components/Auth/Auth";
import React from "react";


function App() {

    return (
        <div className="app">
            <Auth/>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Characters/>}/>
                    <Route path={':id'} element={<SingleCharacter/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
