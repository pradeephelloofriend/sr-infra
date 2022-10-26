import React from 'react'
import { Typography,Card } from 'antd';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import load from '../../../public/img/loading.png'
SwiperCore.use([Pagination,Navigation]);
const { Title ,Text} = Typography;
const { Meta } = Card;
const Testimonial = ({testData}) => {
    //console.log('testData',testData)
    return (
        <section className="wrapper bg-1-1 testi-area">
            <div className="container pt-12 pb-12">

            <div className='kam-title  text-center'>
                            <Title level={2} className='mb-0'><span>WHAT</span> CLIENT SAYS</Title>
                        
                        </div>



                {/* <Title level={2} className='mb-0'><span className='text-theme-color' style={{fontWeight:400}}>WHAT</span> CLIENT SAYS</Title> */}
                <div className="position-relative mt-10">
                <Swiper slidesPerView={2} spaceBetween={90} pagination={{
                        "clickable": true
                        }}
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                          }} className="service-swiper"
                          
                      
                        breakpoints={{
                                      
                            // when window width is >= 640px
                            320: {
                                width: 320,
                                slidesPerView: 1,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 1,
                            },

                            // 1024: {
                            //     width: 550,
                            //     slidesPerView: 1,
                            // },


                        }}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}

                    >
                         {testData.map((i, index) => 
                        <SwiperSlide 
                         key={index}
                        className='hover-zoom-effect  '>
                            <Card bordered={false} hoverable style={{  }} className='textwidthd'>
                                <blockquote className="icon mb-0">
                                    <div className="blockquote-details mb-5 ">
                                        <Image 
                                        placeholder="blur"
                                        blurDataURL={load}
                                        priority={true}
                                        src={i.acf.client_image.url}
                                         height={70}
                                          width={70}
                                           alt="" className="rounded-circle w-12 scale-in-center " />
                                        <div className="info">
                                            <h5 className="mb-1">{i.acf.client_name}</h5>
                                            <p className="mb-0 text-c-yellow">{i.acf.client_desgination}</p>
                                        </div>
                                    </div>
                                    <p className='fs-15'>{i.acf.client_message}</p>
                                </blockquote>
                            </Card>
                        </SwiperSlide>
                         )} 



                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

