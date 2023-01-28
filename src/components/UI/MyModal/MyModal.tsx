import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import classes from './MyModal.module.scss'

interface MyModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
    children: ReactNode
}

const MyModal: FC<MyModalProps> = ({ active, setActive, children }) => {
    return (
        <div className={active ? [classes.modal, classes.active].join(' ') : classes.modal} onClick={() => setActive(false)}>
            <div className={active ? [classes.content, classes.active].join(' ') : classes.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;