import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './NewItemModal.module.scss';
import sprite from '../../../assets/icons/modalSprite.svg';

const modalRootRef = document.querySelector('#modal-root');

// 📌 Необходимо следить за мемоизацией onClose в родительском компоненте
// Для этого использовать useCallback

export default function NewItemModal({ children, onClose, title }) {
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
        <div className={css.overlay} onClick={handleOverlayClick}>
            <div className={css.content}>
                <b className={css.title}>{title}</b>
                {children}
                <button onClick={onClose} className={css.cancelBtn}>
                    Отмена
                </button>
                <button onClick={onClose} className={css.closeBtn}>
                    <svg className={css.closeIcon}>
                        <use href={`${sprite}#close`}></use>
                    </svg>
                </button>
            </div>
        </div>,
        modalRootRef,
    );
}
