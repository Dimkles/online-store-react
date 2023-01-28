import { useField } from 'formik';
import { FC } from 'react';
import MyError from '../MyError/MyError';
import classes from './MyTextInput.module.scss'
interface MyTextInputProps {
    label: string
    id: string
    name: string
    type: string
    placeholder: string
}


const MyTextInput: FC<MyTextInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={props.id || props.name}>{label}</label>
            <input className={classes.input} {...field} {...props} />
            {meta.touched && meta.error ? (
                <MyError>{meta.error}</MyError>
            ) : null}
        </div>
    );
};

export default MyTextInput;