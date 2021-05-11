import classNames from 'classnames';
import React from 'react';
import addBtn from '../../../assets/icons/addBtnNewSprite.svg';
import css from './AddButton.module.scss';

const AddButton = ({ className, ...rest }) => {
    return (
        <button
            type="button"
            className={classNames(css.addBtn, className)}
            {...rest}
        >
            <svg className={css.addBtnIcon}>
                <use href={addBtn + '#plus'}></use>
            </svg>
        </button>
    );
};

export default AddButton;
