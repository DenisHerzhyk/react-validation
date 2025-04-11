import React from 'react';
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from "formik";
import {object, ObjectSchema, string} from 'yup';

const RegistrationForm = () => {
    const RegistrationScheme: ObjectSchema<any> = object().shape({
        name: string()
            .min(2, "Name is too short, should be at least 2 characters")
            .max(50, "Name is too big, should be no more than 50 characters")
            .required("Name is required"),
        email: string()
            .matches(/@/,"Email must contain @ sign")
            .email("Wrong email address format. Example: example@example.com")
            .required("Email is required"),
        password: string()
            .min(6, "Password is too short, should be at least 6 characters long")
            .required("Password is required"),
    })
    const checkValidField = ({field, form: {touched, errors}}) => {
        return `w-[500px] p-2 rounded-md border-2 ${
            errors[field.name] && touched[field.name] 
                ? 'border-red-500' 
                : !errors[field.name] && touched[field.name] 
                    ? 'border-lime-500'
                    : 'border-gray-300'
        }`
    }
    return (
        <>
            <Formik
                initialValues={{name: "", email: "", password: ""}}
                validationSchema={RegistrationScheme}
                onSubmit={(values:{name: string, email: string, password: string}, {setSubmitting}: FormikHelpers<any>) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting}) => (
                    <div className="min-h-screen flex justify-center items-center">
                        <Form className="flex flex-col justify-center items-center gap-4 p-[80px] rounded-lg shadow-xl">
                            <h1 className="text-4xl mb-[50px]">Registration Form <span className='underline decoration-wavy decoration-lime-500'>#1</span></h1>
                            <div className="flex flex-col justify-center items-center gap-[10px]">
                                <Field name="name">
                                    {props => (
                                        <input
                                            {...props.field}
                                            id="name" 
                                            placeholder="Enter name" 
                                            autoComplete="name" 
                                            className={checkValidField(props)}
                                            onChange={(e) => {
                                                props.field.onChange(e);
                                                props.form.setFieldTouched(props.field.name, true);
                                            }}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage className="font-bold text-red-500" name="name" component="div" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[10px]">
                                <Field name="email">
                                    {props => (
                                        <input 
                                            {...props.field}
                                            type="text" 
                                            id="email" 
                                            placeholder="Enter email" 
                                            autoComplete="email" 
                                            className={checkValidField(props)}
                                            onChange={(e) => {
                                                props.field.onChange(e);
                                                props.form.setFieldTouched(props.field.name, true);
                                            }}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage className="font-bold text-red-500" name="email" component="div" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[10px]">
                                <Field name="password">
                                    {props => (
                                        <input 
                                            {...props.field}
                                            type="password" 
                                            id="password" 
                                            placeholder="Enter password" 
                                            autoComplete="current-password" 
                                            className={checkValidField(props)}
                                            onChange={(e) => {
                                                props.field.onChange(e);
                                                props.form.setFieldTouched(props.field.name, true);
                                            }}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage className="font-bold text-red-500" name="password" component="div" />
                            </div>
                            <button className="inline-block transition ease-out bg-lime-300 hover:bg-lime-400 cursor-auto" type="submit" disabled={isSubmitting}>Submit</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default RegistrationForm;


