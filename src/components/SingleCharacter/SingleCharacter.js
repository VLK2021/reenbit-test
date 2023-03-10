import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineArrowLeft} from "@react-icons/all-files/ai/AiOutlineArrowLeft";

import './SingleCharacterStyle.css';
import {getSingleCharacter} from "../../store/slices/singleCharacter.slice";


const SingleCharacter = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {singleCharacter} = useSelector(store => store.singleCharacterR);

    useEffect(() => {
        dispatch(getSingleCharacter({id}))
    }, []);


    return (
        <div className={'singleCharacter'}>
            <NavLink to={-1}>
                <button className="singleCharacter-btn"><AiOutlineArrowLeft className={'icon'}/>go back</button>
            </NavLink>

            <div className={'singleCharacter-img'}>
                <img src={singleCharacter.image} alt="photo"/>
            </div>

            <h1>{singleCharacter.name}</h1>

            <h3>information</h3>

            <div className={'singleCharacter-info'}>
                <div className={'singleCharacter-info-block'}>
                    <h4>Gender</h4>
                    <h5>{singleCharacter.gender}</h5>
                </div>

                <div className={'singleCharacter-info-block'}>
                    <h4>Status</h4>
                    <h5>{singleCharacter.status}</h5>
                </div>

                <div className={'singleCharacter-info-block'}>
                    <h4>Specie</h4>
                    <h5>{singleCharacter.species}</h5>
                </div>

                <div className={'singleCharacter-info-block'}>
                    <h4>Origin</h4>
                    <h5>{singleCharacter.origin?.name}</h5>
                </div>

                <div className={'singleCharacter-info-block'}>
                    <h4>Type</h4>
                    <h5>{singleCharacter.type}</h5>
                </div>
            </div>
        </div>
    );
};

export default SingleCharacter;