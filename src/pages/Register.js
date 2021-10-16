import React, { Fragment, useContext, useState } from "react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from "../utils/hooks";
import { AuthContext } from "../context/auth";
function Register(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    };
    const { onChange, onSubmit, values } = useForm(registerUser, initialState);
    const [addUser, { loading, disabled }] = useMutation(REGISTER_USER, {
        update(_, {data: {register: userData}}) {
            context.login(userData);
            props.history.push('/');
        },
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.errors);
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });
    function registerUser() {
        addUser();
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
                                <h2 className="fw-700 display1-size display2-md-size mb-4">আপোনাৰ <br />একাওন্ট বনাওক</h2>
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
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input type="text" value={values.username} onChange={onChange} name="username" className={`style2-input ps-5 form-control text-grey-900 font-xsss fw-600 ${errors.username ? 'is-invalid' : ''}`} placeholder="আপোনাৰ নাম" />
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text" value={values.email} onChange={onChange} name="email" className={`style2-input ps-5 form-control text-grey-900 font-xsss fw-600 ${errors.email ? 'is-invalid' : ''}`} placeholder="আপোনাৰ ইমেইল ঠিকনা" />
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <input type="Password" value={values.password} onChange={onChange} name="password" className={`style2-input ps-5 form-control text-grey-900 font-xss ls-3 ${errors.password ? 'is-invalid' : ''}`} placeholder="পাছৱাৰ্ড" />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password" value={values.confirm_password} onChange={onChange} name="confirm_password" className={`style2-input ps-5 form-control text-grey-900 font-xss ls-3 ${errors.confirm_password ? 'is-invalid' : ''}`} placeholder="পাছৱাৰ্ড নিশ্চিত কৰক" />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-left mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck2" />
                                        <label className="form-check-label font-xsss text-grey-500">ম্যাদ আৰু নিয়মাৱলী গ্ৰহণ কৰক</label>

                                    </div>
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1"><button type="submit" disabled={loading ? 'disabled' : ''} className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">{loading ? 'অপেক্ষা কৰক...' : 'পঞ্জীয়ন কৰক'}</button></div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">একাওন্ট আছে? <a href="/login" className="fw-700 ms-1">লগইন</a></h6>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirm_password: String!
    ){
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirm_password: $confirm_password
            }
        ){
            id email username createdAt token
        }
    }
`
export default Register;