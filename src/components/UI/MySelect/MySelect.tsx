import { useField } from 'formik';
import React, { FC, ReactNode } from 'react';
interface MySelectProps {
    label: string
    id: string
    name: string
    children: ReactNode
    multiple: boolean
}
const MySelect: FC<MySelectProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};


export default MySelect;