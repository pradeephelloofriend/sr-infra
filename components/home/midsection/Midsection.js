import React from 'react'
import Image from 'next/image'
// import tt from '../../../public/img/tt.jpg'
import { useRouter } from 'next/router'
import 'swiper/css';
const Midsection = () => {
    const [id,setId]=React.useState('1')
    const[active,setActive]=React.useState('active')
    const router = useRouter()
    return (

        <section className="wrapper cta-one midcontact-bg">
            <div className="cta-one__container ">
                <div className="cta-one-bg">  
                <div className=" "></div>
                </div>
               
                <div className="container">
                    <div className="col-lg-12">
                        <div className="cta-one__inner">

                            <h2 className="cta-one__title hovereffectplus2">We Provide Best in Class Services and Solutions Through Our Skilled Workers <br /> </h2>
                            <h4 className="white-text-add hovereffectplus2">Let us Help your Business to Move Forward <br /> </h4>
                            <a onClick={() => router.push('/query/')} className="cta-one__btn thm-btn">Get in Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Midsection