import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './CharactersStyle.css';
import {getAllCharacters} from "../../store/slices/character.slice";
import Character from "../Character/Character";
import image from "../../images/rickAndMorty.png";
import Form from "../Form/Form";


const Characters = () => {
    const dispatch = useDispatch();
    const {characters: {results}, error, charactersFilter} = useSelector(store => store.characters);

    useEffect(() => {
        dispatch(getAllCharacters());
    }, []);


    return (
        <div className={'characters'}>
            <div className={'characters-error'}>
                {
                    error && <h1>{error}</h1>
                }
            </div>

            <div className={'layout-title'}>
                <img src={image} alt="title"/>
            </div>

            <div className={'layout-form'}>
                <Form/>
            </div>

            <div className={'characters-block'}>

                {
                    charactersFilter.length && charactersFilter
                        .slice()
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .map(result => <Character key={result.id} result={result}/>)
                }

                {
                    !charactersFilter.length  && results
                        .slice()
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .map(result => <Character key={result.id} result={result}/>)
                }
            </div>
        </div>
    );
};

export default Characters;