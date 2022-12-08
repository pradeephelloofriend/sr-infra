import React from 'react'
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCreative } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image'
   
import { Card,Typography } from 'antd';

import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/effect-creative"



import load from '../../public/img/loading.png'
import bu1 from '../../public/img/bu/l12.jpg'
import bu2 from '../../public/img/bu/f1.jpg'
import bu3 from '../../public/img/bu/2b.jpg'
import bu4 from '../../public/img/bu/4b.jpg'


const{Text,Title}=Typography
SwiperCore.use([Navigation,Autoplay,EffectCreative]);
const Brochurecom = ({setAbtMenuRef ,aboutData}) => {
  //console.log('aboutData', aboutData)
  const router = useRouter()
  const about = React.useRef();
  React.useEffect(() => {
    //  setAbtMenuRef(about.current.offsetTop)
    //console.log('ref',contact)
  }, [])
  return (

   



    <section className='bg1-sec76'>
    <div className="container ">
        <div className="row pt-7 pb-8 mb-8">
      
        <div className="col-md-12 ">
        <div className='kam-title '>
                <Title level={2} className='pt-2 pt-7 text-uppercase'><span>OUR </span>Broucher </Title>
                </div>
        </div>


        <div className="col-md-4 move-up-class">
                 <div className=' ' >
                    <Image 
                    placeholder="blur"
                                    blurDataURL={load}
                                    priority={true}
                                    src={bu1} alt="" />
                    <h2>S.R Industries Profile Brochure </h2>
                    <div className='barx'></div>
                   
                    <div className="d-flex r-nav-item pt-3">

                    <a href="https://speedtrack.co.in/upload/sr/SR_profile_2021-22.pdf" className="lh-base nav-btn  text-white arrow-animation" size="large">Download Brochure</a>
                   </div>
                </div>
            </div>

            <div className="col-md-4 move-up-class">
                 <div className=' ' >
                    <Image 
                    placeholder="blur"
                                    blurDataURL={load}
                                    priority={true}
                                    src={bu2} alt="" />
                    <h2>Furniture Brochure  </h2>
                    <div className='barx'></div>
                   
                    <div className="d-flex r-nav-item pt-3">

                    <a href="https://speedtrack.co.in/upload/sr/SRFurniture.pdf" className="lh-base nav-btn  text-white arrow-animation" size="large">Download Brochure</a>
                   </div>
                </div>
            </div>

            <div className="col-md-4 move-up-class">
                 <div className=' ' >
                    <Image 
                    placeholder="blur"
                                    blurDataURL={load}
                                    priority={true}
                                    src={bu3} alt="" />
                    <h2>PEB & Pipeline Brochure  </h2>
                    <div className='barx'></div>
                   
                    <div className="d-flex r-nav-item pt-3">

                    <a href="https://speedtrack.co.in/upload/sr/S.R.PEBSawantwadi.pdf" className="lh-base nav-btn  text-white arrow-animation" size="large">Download Brochure</a>
                   </div>
                </div>
            </div>

            

            
        </div>
    </div>
    </section>

  )
}

export default Brochurecom
