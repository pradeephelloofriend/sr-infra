import React from 'react'
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCreative } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image'
import { RightOutlined} from '@ant-design/icons';
import { Card,Typography } from 'antd';
import load from '../../../public/img/loading.png'
import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/effect-creative"
const{Text,Title}=Typography
SwiperCore.use([Navigation,Autoplay,EffectCreative]);
const AboutUsComponent = ({setAbtMenuRef ,aboutData}) => {
    //console.log('aboutData',aboutData)
    const router = useRouter()
    const about = React.useRef(); 
    React.useEffect(() => {
      //  setAbtMenuRef(about.current.offsetTop)
        //console.log('ref',contact)
    }, [])
    return (

        <section className="wrapper bg-light about-area about-word-img" ref={about}>        
            
   <div>
   
                      
   <div className='abt-top-box '>
       
       <div className="container">
          <div className='abt-head mb-6'>
              <div className='border-text '>
                 
                       <Title level={1} className='mb-0 ml-5 colorone-about '> {aboutData.acf.about_us.titlle}</Title>
                       <h3 className='mb-0 mt-0 gray-color font-name ml-5 text-font-weight colortwo-about '><span>{aboutData.acf.about_us.title_small}
                        </span> </h3>
                   
               </div>
               <div className='padding-left-p'>
               <Text><p>{aboutData.acf.about_us.right_block.desc} 
                {/* <a onClick={() => router.push('/about-us/')} className="fs-15 text-center"> Read More<RightOutlined  className='arrow-bounce'/></a> */}
               </p>

              
                      
               </Text>
               



               </div>
           </div>
           <div className='abt-content'>
               <div className='row'>

                   <div className='col-lg-7 col-md-12 col-sm-12 mx-auto g-xxl-2'>
                   
              
                       <div    className='abt-slider'>

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
                                 {aboutData.acf.about_us.left_image.map((s, index) =>

                        

                               <SwiperSlide key={index}> 
                               <a onClick={() => router.push('/about-us/about-company/')}>  <figure onClick={() => router.push('/about-us/about-company/')} className=" shadow ks-img-effect zoom-effect">
                                       <Image
                                       placeholder="blur"
                                       blurDataURL={load}
                                       priority={true}
                                       width={800}
                                       height={400}
                                       src={s.url}
                                       alt="img1"
                                       />
                                   </figure></a>
                               </SwiperSlide>                             
                         )}
                         </Swiper>
                       </div>
                 
                   </div>
                   <div className='col-lg-5 col-md-12 col-sm-12 mx-auto g-xxl-2'>
                       <div className='abt-top-right '>
                           <Card bordered={false} className='bg-theme'>
                               
                               <Title level={2} className='mt-0 text-uppercase yellow-gold-text'>{aboutData.acf.about_us.right_block.experience}  <span className='text-white'>experience </span>in Steel fabrication, Furniture and Construction </Title>
                               <Text className='text-white'>To be most respectful and successful company with standard quality products and services in Steel fabrication, Furniture and Construction industry and always be front leader in development of human society</Text>
                               <div className='row'>
                                   <div className='col-md-6'>
                                       <div className='abt-block-right'>
                                           <div className='ab-detail'>
                                               <Title level={5}>Strategy</Title>
                                               <Text className='text-white'>To produce high quality, innovated and affordable products with expert resources and talent.</Text>
                                           </div>
                                           
                                       </div>
                                   </div>
                                   <div className='col-md-6'>
                                       <div className='abt-block-right'>
                                           <div className='ab-detail'>
                                                   <Title level={5}>Reliability</Title>
                                                   <Text className='text-white'>We ensures value to services for individual customer or corporate in business.</Text>
                                           </div>
                                       </div>  
                                   </div>
                               </div>
                               
                               
                               <div className="d-flex r-nav-item mt-3">
                                   <a onClick={() => router.push('/about-us/about-company/')} className="lh-base nav-btn-black  text-white arrow-animation " size="large">Know More<RightOutlined className='arrow-bounce'/></a>
                               </div>
                           </Card>
                       </div>
                               
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div className='abt-bottom-box'>
       <div className='container pb-10'>
     
           <div  className='row' >
           {aboutData.acf.about_us.bottom_block.facts.map((s, index) =>
               <div key={index} className='col-md-3'>
                   <div className='d-flex flex-row'>
                       <div className="px-2 center-zoom2">
                       <Image
                       placeholder="blur"
                       blurDataURL={load}
                       priority={true}
                                      width={80}
                                       height={80}
                                       src={s.icon.url}
                                       alt="img1"
                                       /><div className="svg-inject icon-svg icon-svg-md text-yellow me-4" alt="" />
                        </div>
                       <div>
                           <Title className='mb-0 text-white'>
                            {s.counter_value}
                            </Title>
                           <p className='text-white'>
                            {s.desc}
                             </p>
                       </div>
                   </div>
               </div>
                )}
             
           </div>
      
       </div>
   </div>                            
   
   </div>
            
         
</section>

    )
}

export default AboutUsComponent
