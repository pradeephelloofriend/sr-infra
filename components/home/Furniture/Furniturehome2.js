import React from 'react'
import { Typography, Card } from 'antd';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SRLWrapper } from "simple-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import load from '../../../public/img/loading.png'

import SwiperCore, { Pagination, Navigation } from 'swiper';
import { RightOutlined } from '@ant-design/icons';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const { Title, Text } = Typography;
const { Meta } = Card;



function Furniturehome2({ funData2 ,funData }) {
    const router = useRouter();
    //console.log('funData',funData)
    //console.log('funData2',funData2)


// const handleRoute=(name)=>{
//     router.push({
//         pathname: '/furniture',
//         query: { id: name },
//       });


const handleRoute=(id)=>{
         router.push({
             pathname: '/furniture',
             query: { id: id },
          });
    

}


    return (
        <>
       <section className="wrapper bg-light service-area bg1-sec">
            <div className='service-top-area'>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 col-lg-12 col-xl-10 col-xxl-12   position-relative">
                        <div className='kam-title '>
                    <Title level={2} className='mb-0 pt-7 text-uppercase'><span>OUR </span>Furnitures </Title>
                    <p>	We offer wooden, cushioned, steel, stainless steel, pre-laminated and modular furniture for multiple applications like homes, offices, schools, hospitals etc. All 
                        our furniture is manufactured in-house to our own designs. We also offer our customers the option to customize designs for the furniture</p>
                    </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-bottom-area pt-0 pt-sm-0'>
                <div className="container py-md-5">
              
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
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
                              slidesPerView: 2,
                            },

                            
                          }}
                          autoplay={{
                            "delay": 2200,
                            "disableOnInteraction": false
                        }}
                        
                        
                        >
                       {funData2.map((i, index) =>
                        
                            <SwiperSlide key={index} > 
                            <a 
                         onClick={()=>handleRoute(i.id)}
                            >
                                <Card className='border-small'
                                    bordered={false} hoverable style={{ width: 350 }}
                                    cover={
                                        <div style={{ overflow: "hidden", height: 270 }}>
                                                              
                                            <Image 
                                            placeholder="blur"
                                            blurDataURL={load}
                                            priority={true}
                                            src={i.acf.main_image.url}
                                                alt="a1"
                                                height={450}
                                                width={500}
                                            />
                                                     
                                        </div>
                                    }
                                >
                                    <div className='swipe-bottom-box text-center position-relative '>
                            <Title level={5} className='mb-5'><a className='swipe-title text-l-black'>
                                 {i.name} 
                                </a></Title>
                                        <div className='mb-5'>
                                             <Text >{i?.acf?.category?.description}</Text>  
                                        </div>
                                        <a onClick={()=>handleRoute(i.id)} className='mt-5 text-l-black rm-hover'>Read More <RightOutlined className='arrow-bounce' /></a>
                                    </div>
                                </Card></a>
                            </SwiperSlide>
                                )}

                       
                    </Swiper>
                </div>
            </div>
            
        </section>
    </>
    );

}

export default Furniturehome2;