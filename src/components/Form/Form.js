import React from 'react';
import {useForm} from "react-hook-form";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";

import './FormStyle.css';
import {useDispatch} from "react-redux";
import {addWord, getSearchCharacters} from "../../store/slices/character.slice";


const Form = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'});
    const dispatch = useDispatch();
    const page = 1;

    const submit = (date) => {
        const word = date.search;
        dispatch(getSearchCharacters({word, page}));
        dispatch(addWord(word));
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <BsSearch className={'search-icon'}/>
                <input type="text" placeholder={'Filter by name...'} {...register('search', {
                    required: 'Поле повинне бути заповнене!'
                })}/>
            </form>
        </div>
    );
};

export default Form;