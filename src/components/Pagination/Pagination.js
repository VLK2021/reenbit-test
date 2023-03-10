import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineLeft} from "@react-icons/all-files/ai/AiOutlineLeft";
import {AiOutlineRight} from "@react-icons/all-files/ai/AiOutlineRight";

import './PaginationStyle.css';
import {getAllCharacters, getSearchCharacters} from "../../store/slices/character.slice";


const Pagination = ({info}) => {
    const {pages, count} = info;
    const dispatch = useDispatch();
    const {word} = useSelector(store => store.characters);
    console.log(word);

    const [startPage, setStartPage] = useState(1);
    const [page, setPage] = useState(1);

    const pagesArr = [];

    for (let i = startPage; i <= pages; i++) {
        pagesArr.push(i);
    }

    const onPageChange = (page) => {
        if (count === 826) {
            dispatch(getAllCharacters({page}));
            setPage(page);
        }
        if (count !== 826) {
            dispatch(getSearchCharacters({word, page}));
            setPage(page);
        }
    }


    return (
        <div className={'pagination'}>
            <button className={'pagination-btn'} onClick={() => {
                onPageChange(page - 1);
            }}>
                <AiOutlineLeft
                    className={'AiOutline'}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>

            {
                pagesArr.map(item =>
                    <div key={item}
                         className={`pagination-pages ${page === item && 'active-page'}`}
                         onClick={() => {
                             onPageChange(item);
                         }}>{item}
                    </div>)
            }

            <button className={'pagination-btn'} onClick={() => {
                onPageChange(page + 1);
            }}>
                <AiOutlineRight
                    className={'AiOutline'}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>
        </div>
    );
};

export default Pagination;