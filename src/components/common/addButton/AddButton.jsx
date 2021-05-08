import React from 'react';
import addBtn from '../../../assets/icons/addBtnSprite.svg';
import css from './AddButton.module.scss';


const AddButton = ({onClick}) => {
    return (
        <>
            <button type='button' className={css.addBtn} onClick={onClick}>
                <svg className={css.addBtnIcon}>
                    <use href={addBtn + '#icon-addBtn'}></use>
                </svg>            
            </button>
        </>
    );
}

export default AddButton;