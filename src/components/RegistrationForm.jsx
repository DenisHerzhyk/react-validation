import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {object, string} from 'yup';
import "../src/scss/RegistrationForm.scss";

const RegistrationForm = () => {
    const RegistrationScheme = object().shape({
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
    return (
        <>
            <Formik
                initialValues={{name: "", email: "", password: ""}}
                validationSchema={RegistrationScheme}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setSubmitting(false);
                }
            }>
                {({ isSubmitting }) => (
                    <Form className="form">
                        <div className="form__item">
                            <Field className="form__field" type="text" name="name" id="name" placeholder="Enter name" />
                            <ErrorMessage className="form__error" name="name" component="div" />
                        </div>
                        <div className="form__item">
                            <Field className="form__field" type="text" name="email" id="email" placeholder="Enter email" />
                            <ErrorMessage className="form__error" name="email" component="div" />
                        </div>
                        <div className="form__item">
                            <Field className="form__field" type="password" name="password" id="password" placeholder="Enter password" />
                            <ErrorMessage className="form__error" name="password" component="div" />
                        </div>
                        <button className="form__button" type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default RegistrationForm;