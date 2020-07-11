import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../../components/common/FormsControls/FormsControls';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email", "email", Input, [required])}
        {createField("Password", "password", Input, [required], {type: "password"})}
        {createField(null, "rememberMe", Input, [], {type: "checkbox"}, " remember me")}
        { error && 
            <div className={style.formSummaryError}>
                <span>Login or email invalid</span>
            </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);