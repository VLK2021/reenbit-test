import React from 'react';
import {Outlet} from "react-router-dom";

import './LayoutStyle.css';
import image from '../images/rickAndMorty.png';
import Form from "../components/Form/Form";


const Layout = () => {

    return (
        <div className={'layout'}>
            <div className={'layout-title'}>
                <img src={image} alt="title"/>
            </div>

            <div className={'layout-form'}>
                <Form/>
            </div>

            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;