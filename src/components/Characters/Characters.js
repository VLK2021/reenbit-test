import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './CharactersStyle.css';
import {getAllCharacters} from "../../store/slices/character.slice";
import Character from "../Character/Character";
import image from "../../images/rickAndMorty.png";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination";


const Characters = () => {
    const dispatch = useDispatch();
    const {info, characters: {results}, error} = useSelector(store => store.characters);
    console.log(results);

    const page=1;


    useEffect(() => {
        dispatch(getAllCharacters({page}));
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
                    results && results
                        .slice()
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .map(result => <Character key={result.id} result={result}/>)
                }
            </div>

            <div className={'characters-pagination'}>
                <Pagination info={info}/>
            </div>
        </div>
    );
};

export default Characters;