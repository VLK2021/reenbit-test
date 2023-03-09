import React from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';


const Form = () => {
    const {register, handleSubmit, watch, reset, formState:{errors, isValid}} = useForm();


    const submit = (data) => {
        console.log(data);
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('search')}/>
            </form>
        </div>
    );
};

export default Form;