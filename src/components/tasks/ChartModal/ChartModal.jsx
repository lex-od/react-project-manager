import React, { useEffect } from 'react';
import { Chart } from '../';
import { createPortal } from 'react-dom';
import css from './ChartModal.module.scss';
import sprite from '../../../assets/icons/sprite-chart.svg';

const modalRootRef = document.querySelector('#modal-root');

export default function ChartModal({ onClose }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleOverlayClick = e => {
        if (e.target === e.currentTarget) onClose();
    };

    return createPortal(
        <div onClick={handleOverlayClick} className={css.backdrop}>
            <div className={css.modalBox}>
                <button
                    type="button"
                    className={css.closeButton}
                    onClick={onClose}
                >
                    <svg className={css.closeSvg}>
                        <use href={sprite + '#icon-close'}></use>
                    </svg>
                </button>
                <Chart />
            </div>
        </div>,
        modalRootRef,
    );
}
