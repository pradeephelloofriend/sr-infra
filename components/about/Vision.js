import React from 'react'
import Image from 'next/image'
import { Typography,Card,Space } from 'antd';
const { Title ,Text} = Typography;


// import s1 from '../../../public/img/services/service-1.jpg'
// import s2 from '../../../public/img/services/service-1.jpg'
// import s3 from '../../../public/img/services/service-1.jpg'
// import s4 from '../../../public/img/services/service-1.jpg'
const Vision = () => {
    return (
        <section className="wrapper  bg-image bg-overlay text-white fact-area fact-area-bg">
            <div className="container py-12 py-md-12">
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='fact-box'>
                           
                            <Title level={1} className='mt-sm-0 mb-4 fs-40 text-blue '>Mission</Title>
                            <p className="mb-6">The belief that customer satisfaction is as important as their 
                             Services, have helped establishments garner a vast base of customers, which continues
                              to grow by the day. This business employs individuals that are dedicated towards their 
                              respective roles and put in a lot of effort to achieve the common vision and larger goals 
                              of the company. </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='fact-box'>
                           
                            <Title level={1} className='mt-sm-0 mb-4 fs-40 text-blue '>Vision</Title>
                            <p className="mb-13"> To  be most respectful and successful company with standard quality products and services in Steel fabrication,
                             Furniture and Construction industry and always be front leader in development of human society. </p>
                        </div>
                    </div>
                   

                    
                </div>
            </div>
        </section>
    )
}

export default Vision
