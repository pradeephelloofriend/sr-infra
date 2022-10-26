import React from 'react'
// import { Card,Typography } from 'antd';
import { useRouter } from 'next/router'
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCreative } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
// import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { Typography, Card } from 'antd';
import load from '../../../public/img/loading.png'
import bu1 from '../../../public/img/bu/l1.jpg'
import bu12 from '../../../public/img/bu/l12.jpg'

import bu2 from '../../../public/img/bu/l2.jpg'
import bu22 from '../../../public/img/bu/l22.jpg'
import bu23 from '../../../public/img/bu/l23.jpg'

import bu3 from '../../../public/img/bu/l3.jpg'
import bu32 from '../../../public/img/bu/l32.jpg'

import bu4 from '../../../public/img/bu/l4.jpg'
import bu41 from '../../../public/img/bu/l42.jpg'
import bu42 from '../../../public/img/bu/l43.jpg'

import "swiper/css";
import "swiper/css/effect-creative"

SwiperCore.use([Navigation,Autoplay,EffectCreative]);

const { Title, Text } = Typography;

const Labour = () => {
    const router = useRouter()
   
    return (
        <section className='bg1-sec76'>
        <div className="container ">
            <div className="row pt-7 pb-7">
          
            <div className="col-md-12 ">
            <div className='kam-title '>
                    <Title level={2} className='pb-0 pt-7 text-uppercase'><span>OUR </span>Labour Contracts </Title>
                    <p className='pb-0 pt-1'>We Provide Best in Class Skilled Workers of your Requirement </p>
                    </div>
            </div>


            <div className="col-md-3 move-up-class">
                     {/* <a onClick={() => goToPage('/query/')}> */}
                    
                     <Swiper className="swiper "
                           effect={'creative'} creativeEffect={{
                               "prev": {
                                 "shadow": true,
                                 "translate": [
                                   0,
                                   0,
                                   -400
                                 ]
                               },
                               "next": {
                                 "translate": [
                                   "100%",
                                   0,
                                   0
                                 ]
                               }
                             }}
                               // effect="coverflow"
                               autoplay={{
                                   "delay": 2500,
                                   "disableOnInteraction": false
                               }}
                               navigation={{
                               nextEl: '.review-swiper-button-next',
                               prevEl: '.review-swiper-button-prev',
                               }}
                               >
                                

                        

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu1}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>    

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu12}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>    
                     
                    
                         </Swiper>


                        <h2>     Labour Supply </h2>
                        <div className='barf'></div>
                        <p>
                            We Supply Labours for Construction Services
                        </p>
                    {/* </a> */}
                </div>

                <div className="col-md-3  move-up-class">
                     {/* <a  onClick={() => goToPage('/query/')}> */}


                     <Swiper className="swiper "
                           effect={'creative'} creativeEffect={{
                               "prev": {
                                 "shadow": true,
                                 "translate": [
                                   0,
                                   0,
                                   -400
                                 ]
                               },
                               "next": {
                                 "translate": [
                                   "100%",
                                   0,
                                   0
                                 ]
                               }
                             }}
                               // effect="coverflow"
                               autoplay={{
                                   "delay": 2500,
                                   "disableOnInteraction": false
                               }}
                               navigation={{
                               nextEl: '.review-swiper-button-next',
                               prevEl: '.review-swiper-button-prev',
                               }}
                               >
                                

                        

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu2}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>    

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu22}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>  

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu23}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>                           
                    
                         </Swiper>







                        
                         <h2> Industrial Contracts </h2>
                         <div className='barf'></div>
                        <p>
                        Painting, Transportation, Storage and Electrical Contracts
                        </p>

                      {/* </a> */}
                </div>

                <div className="col-md-3 move-up-class">
                     {/* <a onClick={() => goToPage('/query/')}> */}
                         
                     <Swiper className="swiper "
                           effect={'creative'} creativeEffect={{
                               "prev": {
                                 "shadow": true,
                                 "translate": [
                                   0,
                                   0,
                                   -400
                                 ]
                               },
                               "next": {
                                 "translate": [
                                   "100%",
                                   0,
                                   0
                                 ]
                               }
                             }}
                               // effect="coverflow"
                               autoplay={{
                                   "delay": 2500,
                                   "disableOnInteraction": false
                               }}
                               navigation={{
                               nextEl: '.review-swiper-button-next',
                               prevEl: '.review-swiper-button-prev',
                               }}
                               >
                                

                        

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu3}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>    

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu32}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>  

                                                        
                    
                         </Swiper>


                         <h2>Fabrication </h2>
                         <div className='barf'></div>
                        <p>
                        We do Metal and Stainless Steel  Supply & Fabrication 
                        </p>
                      {/* </a> */}
                </div>

                <div className="col-md-3 move-up-class">
                     {/* <a onClick={() => goToPage('/query/')}> */}
                        
                     <Swiper className="swiper "
                           effect={'creative'} creativeEffect={{
                               "prev": {
                                 "shadow": true,
                                 "translate": [
                                   0,
                                   0,
                                   -400
                                 ]
                               },
                               "next": {
                                 "translate": [
                                   "100%",
                                   0,
                                   0
                                 ]
                               }
                             }}
                               // effect="coverflow"
                               autoplay={{
                                   "delay": 2500,
                                   "disableOnInteraction": false
                               }}
                               navigation={{
                               nextEl: '.review-swiper-button-next',
                               prevEl: '.review-swiper-button-prev',
                               }}
                               >
                                

                        

                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu4}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>    

                               
                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu41}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>    


                               <SwiperSlide > 
                               <a onClick={() => router.push('/query/')}>  <figure onClick={() => router.push('/query/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                    //    width={800}
                                    //    height={400}
                                       src={bu42}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>                         
                    
                         </Swiper>


                         <h2>Manufacturer or Furniture Supplier  </h2>
                         <div className='barf'></div>
                        <p>
                        Steel, Wooden and Modular

                        </p>
                      {/* </a> */}
                </div>

                
            </div>
        </div>
        </section>
    )
}

export default Labour
