import React, { Fragment, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "../utils/hooks";
import gql from 'graphql-tag';
import { AuthContext } from "../context/auth";
const Login = (props) => {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const initialState = {
        username: "",
        password: ""
    };
    const { onChange, onSubmit, values } = useForm(loginUserCallback, initialState);
    const [loginUser, { loading, disabled }] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}) {
            context.login(userData);
            props.history.push('/');
        },
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });
    function loginUserCallback() {
        loginUser();
    }
    return (
        <Fragment>
            <div className="main-wrap">
                <div className="nav-header bg-transparent shadow-none border-0">
                    <div className="nav-top w-100">
                        <a href="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">প্ৰবাহ </span> </a>
                        <button className="nav-menu me-0 ms-auto"></button>

                        <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">লগইন</a>
                        <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">পঞ্জীয়ন</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                        style={{ backgroundImage: `url("https://via.placeholder.com/800x950.png")` }}></div>
                    <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                        <div className="card shadow-none border-0 ms-auto me-auto login-card">
                            <div className="card-body rounded-0 text-left">
                                <h2 className="fw-700 display1-size display2-md-size mb-3">আপোনাৰ  <br />একাউণ্টত লগইন কৰক</h2>
                                {
                                    Object.keys(errors).length > 0 && (
                                        <div className="errors">
                                            <ul className="list">
                                                {Object.keys(errors).map(value => (
                                                    <li key={value} className="text-danger">{errors[value]}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                }
                                <form onSubmit={onSubmit} className={loading ? 'loading' : ''}>

                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text" name="username" value={values.username} onChange={onChange} className={`style2-input ps-5 form-control text-grey-900 font-xsss fw-600 ${errors.username ? 'is-invalid' : ''}`} placeholder="আপোনাৰ ইউজাৰ নেম" />
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password" name="password" value={values.password} onChange={onChange} className={`style2-input ps-5 form-control text-grey-900 font-xss ls-3 ${errors.password ? 'is-invalid' : ''}`} placeholder="পাছৱাৰ্ড" />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-left mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                                        <label className="form-check-label font-xsss text-grey-500">মোক মনত ৰাখিব</label>
                                        <a href="/password" className="fw-600 font-xsss text-grey-700 mt-1 float-right">আপোনাৰ পাছৱৰ্ড পাহৰিছে নেকি?</a>
                                    </div>
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1"><button type="submit"  disabled={loading ? disabled : ''} className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">{loading ? 'অপেক্ষা কৰক...' : 'লগইন'}</button></div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">একাউণ্ট নাই? <a href="/register" className="fw-700 ms-1">এতিয়াই পঞ্জীয়ন কৰক</a></h6>
                                    </div>
                                </form>
                                <div className="col-sm-12 p-0 text-center mt-2">

                                    <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">বা, আপোনাৰ সামাজিক একাউণ্টৰ সৈতে ছাইন ইন কৰক </h6>
                                    <div className="form-group mb-1"><a href="/register" className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"><img src="assets/images/icon-1.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> গুগলৰ সৈতে ছাইন ইন কৰক</a></div>
                                    <div className="form-group mb-1"><a href="/register" className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "><img src="assets/images/icon-3.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> ফেচবুকৰ সৈতে ছাইন ইন কৰক</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}
const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
                username: $username
                password: $password
        ){
            id email username createdAt token
        }
    }
`
export default Login;