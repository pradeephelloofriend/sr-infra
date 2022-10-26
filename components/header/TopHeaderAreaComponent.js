import React from 'react'

const TopHeaderAreaComponent = () => {
    return (
        <>
            <div className="top-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header-content-left">
                                <a>Welcome To S.R. Industries !</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-content-right">
                                
                                    <a href="tel:+918989727070" className="me-xl-8 text-c-blue">
                                    <i className="fa fa-mobile me-xl-1"></i>
                                        Call Us For Inquiry: +91-8989727070
                                    </a>
                                    <a href="mailto:srsteelindustries@rediffmail.com" className="text-c-blue">
                                    <i className="fa fa-envelope-o me-xl-1"></i>
                                        Email: srsteelindustries@rediffmail.com
                                    </a>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeaderAreaComponent
