import React from 'react';
import {NavLink} from "react-router-dom";

import './CharacterStyle.css';


const Character = ({result}) => {
    const {id, name, species} = result;


    return (
        <div className={'character'}>

            <NavLink to={id.toString()}>
                <div className={'character-img'}>
                    <img src={result.image} alt="photo"/>
                </div>

                <div className={'character-info'}>
                    <p className={'character-info-name'}>{name}</p>
                    <p className={'character-info-species'}>{species}</p>
                </div>
            </NavLink>

        </div>
    );
};

export default Character;