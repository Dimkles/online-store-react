import { useField } from 'formik';
import React, { FC } from 'react';
import MyError from '../MyError/MyError';
import classes from './MyFileInput.module.scss'
interface MyFileInputProps {
    label: string
    id: string
    name: string
}

const MyFileInput: FC<MyFileInputProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={props.id || props.name}>{label}</label>
            <input
                className={classes.input}
                type='file'
                {...props}
                onChange={(e) => {
                    helpers.setValue(e.currentTarget.files![0]);
                }}
            />
            {meta.touched && meta.error ? (
                <MyError>{meta.error}</MyError>
            ) : null}
        </div>
    );
};

export default MyFileInput;