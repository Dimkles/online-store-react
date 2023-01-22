import React, { FC, useState } from 'react';
import classes from './MyInput.module.scss'

interface MyInputProps {
    name: string
    type: 'text' | 'email' | 'password'
    placeholder: string
    onChange: (value: string) => void
}

const MyInput: FC<MyInputProps> = ({ name, type, placeholder, onChange }) => {
    const [value, setVale] = useState('')
    const changeHandler = (curretValue: string) => {
        setVale(curretValue)
        onChange(curretValue)
    }
    return (
        <label >
            <span>{name}</span>
            <input value={value} onChange={(e) => changeHandler(e.target.value)} placeholder={placeholder} type={type} />
        </label>

    );
};

export default MyInput;