import React, { FC } from 'react';
import classes from './MyInput.module.scss'

interface MyInputProps {
    name: string
    type: 'text' | 'email' | 'password'
    placeholder: string
    setValue: (value: string) => void
    value: string
}

const MyInput: FC<MyInputProps> = ({ name, type, placeholder, setValue, value }) => {
    return (
        <label className={classes.label}>
            <span className={classes.name}>{name}</span>
            <input className={classes.input} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} type={type} />
        </label>

    );
};

export default MyInput;