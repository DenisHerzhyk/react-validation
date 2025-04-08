import React from 'react';
import {Control, useForm, useWatch} from 'react-hook-form';
import "../src/scss/RegistrationForm.scss";

const watchValue = (control: Control, fieldName: string) => useWatch({control, name: fieldName, defaultValue: ""});

const RegistrationHookForm = () => {
    const {register, control, handleSubmit, formState: {errors}} = useForm();
    const nameValue = watchValue(control, 'name_N2');
    const emailValue = watchValue(control, 'email_N2');
    const passwordValue = watchValue(control, 'password_N2');

    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__item">
                    <div className="form__field">
                        <label htmlFor="name_N2">Enter name: </label>
                        <input className="form__field" type="text" id="name_N2" placeholder="Enter name" {...register('name_N2',{required: "Name is required", minLength: {value: 2, message: "Name must be more than 2 characters"}, maxLength: {value: 50, message: "Name must not contain more than 50 characters"}})} autoComplete="name" />
                    </div>
                    {errors.name_N2 ? <p className="form__error">{String(errors.name_N2.message)}</p> : nameValue && <p className="form__success">Correct name</p>}
                </div>
                <div className="form__item">
                    <div className="form__field">
                        <label htmlFor="email_N2">Enter email: </label>
                        <input className="form__field" type="text" id="email_N2" placeholder="Enter email" {...register('email_N2',{required: "Email is required", pattern: {value: /^[^\s@]+@[^\s@]+\.com$/i, message: "Email must contain @ sign and .com at the end"}})} autoComplete="email" />
                    </div>
                    {errors.email_N2 ? <p className="form__error">{String(errors.email_N2.message)}</p> : emailValue && <p className="form__success">Correct email</p>}
                </div>
                <div className="form__item">
                    <div className="form__field">
                        <label htmlFor="password_N2">Enter password: </label>
                        <input className="form__field" type="password" id="password_N2" placeholder="Enter password" {...register('password_N2',{ required: "Password is required", minLength: {value: 2, message:"Password must be more than 2 characters"}})} autoComplete="current-password" />
                    </div>
                    {errors.password_N2 ? <p className="form__error">{String(errors.password_N2.message)}</p> : passwordValue && <p className="form__success">Correct password</p>}
                </div>
                <button className="form__button" type="submit">Submit</button>
            </form>
        </>
    );
}

export default RegistrationHookForm;