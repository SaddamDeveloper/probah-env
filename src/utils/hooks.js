import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [name]: value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return {
        onChange,
        onSubmit,
        values
    }
}