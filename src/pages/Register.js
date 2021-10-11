import React, { Component , Fragment } from "react";


class Register extends Component {
    render() {
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
                        style={{backgroundImage: `url("https://via.placeholder.com/800x950.png")`}}></div>
                        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                <div className="card-body rounded-0 text-left">
                                    <h2 className="fw-700 display1-size display2-md-size mb-4">আপোনাৰ <br />একাওন্ট বনাওক</h2>                        
                                    <form>
                                        
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="আপোনাৰ নাম" />                        
                                        </div>
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="আপোনাৰ ইমেইল ঠিকনা" />                        
                                        </div>
                                        <div className="form-group icon-input mb-3">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="পাছৱাৰ্ড" />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-group icon-input mb-1">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="পাছৱাৰ্ড নিশ্চিত কৰক" />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-check text-left mb-3">
                                            <input type="checkbox" className="form-check-input mt-2" id="exampleCheck2" />
                                            <label className="form-check-label font-xsss text-grey-500">ম্যাদ আৰু নিয়মাৱলী গ্ৰহণ কৰক</label>
                                            
                                        </div>
                                    </form>
                                    
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1"><a href="/register" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">পঞ্জীয়ন কৰক</a></div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">একাওন্ট আছে? <a href="/login" className="fw-700 ms-1">লগইন</a></h6>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Register;