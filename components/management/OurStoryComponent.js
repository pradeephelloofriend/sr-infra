import React from 'react'
import { Card,Typography,Tabs } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftCircleFilled  ,RightCircleFilled  } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import Image from 'next/image'
import load from '../../public/img/loading.png'
SwiperCore.use([Pagination,Navigation]);
const {Title,Text}=Typography
const OurStoryComponent = ({manData}) => {


    //console.log('manData',manData)
  return (
    
      <>
<section className=' bg1-sec76'>
<div className='container-fluid'>
          <div className="  pt-7 text-center">
          <div className='kam-title '>
                    <h2 className='mb-0 pb-4 pt-7 text-uppercase'><span>OUR </span>Management </h2>
             </div>
              {/* <Title className='block-title-1  text-uppercase' level={2}>Our Stories</Title> */}
              {/* <Text className='block-desc '>In addition to unparalleled business growth, BNI Members develop lasting relationships that allow them to grow personally and professionally.</Text> */}
          </div>
          <div className=' bg1-sec77 pt-8 '>
              <div className='story-slider'>
                  <Swiper slidesPerView={3} pagination={true} spaceBetween={25}
                      navigation={{
                          nextEl: '.review-swiper-button-next',
                          prevEl: '.review-swiper-button-prev',
                      }} className="story-swiper"
                      
                    //   breakpoints={{
                                      
                        
                    //     320: {
                    //         width: 320,
                    //         slidesPerView: 1,
                    //       },
                    //     640: {
                    //       width: 640,
                    //       slidesPerView: 2,
                    //     },
                    
                    //     768: {
                    //       width: 768,
                    //       slidesPerView: 2,
                    //     },

                    //     1026: {
                    //         width: 1026,
                    //         slidesPerView: 2,
                    //       },
  

                        
                    //   }}
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
                         {manData.acf.member.map((i, index) => 
                      <SwiperSlide key={index} >
                            <div class="testimonial-2">
                                <div class="testimonial-text">
                                    <p> {i.description}</p>
                                </div>
                                <div class="testimonial-detail clearfix">
                                    <div class="testimonial-pic quote-left radius shadow">
                                        <Image 
                                        placeholder="blur"
                                        blurDataURL={load}
                                        priority={true}
                                        src={i.image.url} width="100" height="100" alt="" />
                                        </div>
                                    <strong class="testimonial-name">{i.name}</strong> <span class="testimonial-position">{i.position} </span> 
                                </div>
                            </div>
                      </SwiperSlide>
                         )}
                      
                      
                  </Swiper>
              </div>
              <div className='slide-btn'>
                  <LeftCircleFilled className='review-swiper-button-prev' />
                  <RightCircleFilled className='review-swiper-button-next' />
              </div>
          </div>
          </div>
          </section>
      </>
    
  )
  
}

export default OurStoryComponent