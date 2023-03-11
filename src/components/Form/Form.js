import React from 'react';
import {useForm} from "react-hook-form";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";

import './FormStyle.css';
import {useDispatch} from "react-redux";
import {filterCharacters} from "../../store/slices/character.slice";


const Form = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(filterCharacters(data.search));
    }


    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <BsSearch className={'search-icon'}/>
                <input type="text" placeholder={'Filter by name...'} {...register('search')}/>
            </form>
        </div>
    );
};

export default Form;