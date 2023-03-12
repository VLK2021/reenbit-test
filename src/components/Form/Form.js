import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

import './FormStyle.css';
import {filterCharacters} from "../../store/slices/character.slice";


const Form = () => {
    const {register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        const name = query.get('name');
        dispatch(filterCharacters(name))
        setValue('search', name);
    }, [query]);


    const submit = (data) => {
        setQuery({name: data.search});
    }


    return (
        <div className={'form'}>
            <form onChange={handleSubmit(submit)}>
                <BsSearch className={'search-icon'}/>
                <input type="text" defaultValue={''} placeholder={'Filter by name...'} {...register('search')}/>
            </form>
        </div>
    );
};

export default Form;