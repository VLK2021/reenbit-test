import React from 'react';
import {NavLink} from "react-router-dom";

import './CharacterStyle.css';


const Character = ({result}) => {
    const {id, name} = result;

    return (
        <div className={'character'}>

            <NavLink to={id.toString()}>
                <div className={'character-img'}>
                    <img src={result.image} alt="photo"/>
                </div>

                <div className={'character-info'}>
                    {name}
                </div>
            </NavLink>

        </div>
    );
};

export default Character;