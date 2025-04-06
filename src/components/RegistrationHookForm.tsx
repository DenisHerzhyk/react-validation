
import {useForm} from 'react-hook-form';
import "../src/scss/RegistrationForm.scss";

const RegistrationHookForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <>
            <form className="form" onSubmit={handleSubmit(onsubmit)}>
                <div className="form__item">
                    <div className="form__field">
                        <label htmlFor="name">Enter name: </label>
                        <input className="form__field" type="text" name="name" id="name_N2" placeholder="Enter name" {...register('name',{required: true, minLength: {value: 2, message: "Name must be more than 2 characters"}, maxLength: {value: 50, message: "Name must not contain more than 50 characters"}})} autoComplete="name" />
                    </div>
                    {errors.name && <p className="form__error">{errors.name.message}</p>}
                </div>
                <div className="form__item">
                    <div className="form__field">
                        <label htmlFor="email">Enter email: </label>
                        <input className="form__field" type="text" name="email" id="email_N2" placeholder="Enter email" {...register('email',{required: true})} autoComplete="email" />
                    </div>
                    {errors.email && <p className="form__error">Email is required</p>}
                </div>
                <div className="form__item">
                    <div className="form__field">
                        <label htmlFor="password">Enter password: </label>
                        <input className="form__field" type="password" name="password" id="password_N2" placeholder="Enter password" {...register('password',{ required: true, minLength: {value: 2, message:"Password must be more than 2 characters"}})} autoComplete="current-password" />
                    </div>
                    {errors.password && <p className="form__error">{errors.password.message}</p>}
                </div>
                <button className="form__button" type="submit">Submit</button>
            </form>
        </>
    );
}

export default RegistrationHookForm;