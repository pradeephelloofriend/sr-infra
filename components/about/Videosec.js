import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from 'antd';

import ReactPlayer from 'react-player'

const { Title } = Typography;
const Videosec = () => {
  return (
   
    <section className="wrapper bg-gray about-area bg1-sec py-10">
            <div className="container  py-10 py-md-12">
                <div className="row  align-items-center">
                    <div className="col-lg-8 position-relative order-lg-2">
                        <div className="overlap-grid overlap-grid-2">
                            <div className="item ab-right-content">
                                <div className="swiper"
                                //  autoplay={{
                                //     "delay": 2500,
                                //     "disableOnInteraction": false
                                // }}
                            >
                              
                                    
                                       
                                        <ReactPlayer url='https://www.youtube.com/watch?v=grNPIg1qTv8' />
                                   
                                  
                                
                                   
                                
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className='ab-left-content'>
                          <h1>IF You Have a Dream for Your Home We have the Solutions </h1>
                           <p> Leading the Industry for 25+ Years</p>
                           
                                <a  className="lh-base nav-btn-black  " size="large"></a>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
               
                
        
  
</section>

   
   


  )
}

export default Videosec