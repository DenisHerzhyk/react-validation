import React from 'react';
import {Control, useForm, useWatch} from 'react-hook-form';


const watchValue = (control: Control, fieldName: string) => useWatch({control, name: fieldName, defaultValue: ""});

const RegistrationHookForm = () => {
    const {register, control, handleSubmit, formState: {errors}} = useForm();
    const nameValue = watchValue(control, 'name_N2');
    const emailValue = watchValue(control, 'email_N2');
    const passwordValue = watchValue(control, 'password_N2');

    const onSubmit = (data: any) => console.log(data);
    const checkValidField = (errors) => {
        return `w-[500px] p-2 rounded-md border-2 
        ${
            errors 
            ? 'border-red-500' 
            : nameValue && !errors
            ? 'border-lime-500' 
            : 'border-gray-300'}`
    }
    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <form className="flex flex-col justify-center items-center gap-4 p-[80px] rounded-lg shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl mb-[50px]">Registration Form <span className='underline decoration-wavy decoration-lime-500'>#2</span></h1>
                    <div className="flex flex-col justify-center items-center gap-[10px]">
                        <div className="form__field">
                            <label htmlFor="name_N2">Enter name: </label>
                            <input className={checkValidField(errors.name_N2)} type="text" id="name_N2" placeholder="Enter name" {...register('name_N2',{required: "Name is required", minLength: {value: 2, message: "Name must be more than 2 characters"}, maxLength: {value: 50, message: "Name must not contain more than 50 characters"}})} autoComplete="name" />
                        </div>
                        {errors.name_N2 ? <p className="font-bold text-red-500">{String(errors.name_N2.message)}</p> : nameValue && <p className='font-bold text-lime-500'>Correct name</p>}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[10px]">
                        <div className="form__field">
                            <label htmlFor="email_N2">Enter email: </label>
                            <input className={checkValidField(errors.email_N2)} type="text" id="email_N2" placeholder="Enter email" {...register('email_N2',{required: "Email is required", pattern: {value: /^[^\s@]+@[^\s@]+\.com$/i, message: "Email must contain @ sign and .com at the end"}})} autoComplete="email" />
                        </div>
                        {errors.email_N2 ? <p className="font-bold text-red-500">{String(errors.email_N2.message)}</p> : emailValue && <p className='font-bold text-lime-500'>Correct email</p>}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[10px]">
                        <div className="form__field">
                            <label htmlFor="password_N2">Enter password: </label>
                            <input className={checkValidField(errors.password_N2)}type="password" id="password_N2" placeholder="Enter password" {...register('password_N2',{ required: "Password is required", minLength: {value: 2, message:"Password must be more than 2 characters"}})} autoComplete="current-password" />
                        </div>
                        {errors.password_N2 ? <p className="font-bold text-red-500">{String(errors.password_N2.message)}</p> : passwordValue && <p className='font-bold text-lime-500'>Correct password</p>}
                    </div>
                    <button className="inline-block transition ease-out bg-lime-300 hover:bg-lime-400 cursor-auto" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default RegistrationHookForm;