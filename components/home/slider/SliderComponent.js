import React from "react";
// import Swiper and modules styles
import { Space,Typography } from 'antd'; 
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRouter} from 'next/router'
import Image from 'next/image'
import load from '../../../public/img/loading.png'
import { PhoneOutlined,MailOutlined,ArrowLeftOutlined ,ArrowRightOutlined  } from '@ant-design/icons';

// import BusinessUnitComponent from './BusinessUnitComponent'  
import BusComp from './BusComp' 
SwiperCore.use([Navigation]);
const{Text,Title}=Typography
const SliderComponent = ({aboutData}) => {
  //console.log('aboutData',aboutData)
  const [size, setSize] = React.useState(30);
  const router=useRouter()
  return (
    <>
      <section className="wrapper slider-area ">
        <div className="container-fluid no-padding">
          <div className="slider-right">
            <Swiper className="swiper"

              effect="coverflow"
              navigation={{
                nextEl: '.review-swiper-button-next',
                prevEl: '.review-swiper-button-prev',
              }}
              autoplay={{
                 "delay": 3000,
                 "disableOnInteraction": false
            }}
            >


           {aboutData.acf.slider.map((s, index) =>
              <SwiperSlide 
              key={index}
              >
              
              
                <figure>

                  <Image
                  placeholder="blur"
                  blurDataURL={load}
                  priority={true}
                    src={s.image.url}
                  alt="img1"
                  height={650}
                  width={1800}
                  />
                </figure>

                <div className="row">
                
                <div className="col-7 swiper_content">
                  <h2 className="mb-0 mb-md-1 ">
                    {s.caption_big}
                    </h2>
                  <h3 className="mb-0 mb-md-1 mt-0">
                    {s.caption_medium}  
                    </h3>
                  <p>
                    {s.caption_small} 
                  </p>
                  
                  {/* <p> We have the Solution.</p> */}
                  <a  onClick={() => router.push('/about/')} className="btn slide-rm-btn btn-sm  btn-view mt-0 mt-lg-0 hidepart_370">Read More</a> 
                  {/* <a  onClick={() => goToPage(s.button_link)} className="btn slide-rm-btn btn-sm  btn-view mt-0 mt-lg-0 hidepart_370">{s.button_link} contact</a>  */}
                  
                </div>
               
                </div>
              </SwiperSlide>
            )}

              
            </Swiper>
          </div>
          <div>

          </div>
        </div>
        
        <div className="bu-content">
          {/* <BusinessUnitComponent router={router}/> */}
          <BusComp router={router}/> 
        </div>
      </section>
    </>
  );
};

export default SliderComponent;
