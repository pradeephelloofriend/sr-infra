import React from 'react'
import { useRouter } from 'next/router'
import { Typography,Card,Space } from 'antd';
import Image from 'next/image'
import load from '../../../public/img/loading.png'
import { Swiper, SwiperSlide } from "swiper/react";
import {RightOutlined,ArrowLeftOutlined ,ArrowRightOutlined   } from '@ant-design/icons'; 
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {Navigation} from 'swiper';
SwiperCore.use([Navigation]);
const { Title ,Text} = Typography;
const ProjectComponent = ({serfData}) => {
    //console.log('serfData',serfData)
    const router = useRouter()
    const [id,setId]=React.useState('1')
    const[active,setActive]=React.useState('btn-active')

    return (
        
        <section className="wrapper  proj-area">
            <div className="container py-12 py-md-12">
                <div className="row mb-2">
                    <div className='col-md-5'>
                        <div className='mb-6'>

                        <div className='kam-title '>
                    <Title level={2} className='mb-0'><span>OUR</span> PROJECTS</Title>
                    </div>


                        <Title level={2} className='mb-5'><span style={{fontWeight:300}}>Here some of widely executed and recognized Projects by </span> <span className='text-red2' style={{fontWeight:400}}>S R INDUSTRIES GROUP  of Companies </span></Title>
                           
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='proj-filter isotope-filter'>
                        
                                                   <div className="d-flex r-nav-item " >
                                                             <a
                                                                onClick={() => router.push({
                                                                    pathname: `/works/${serfData.slug}`,
                                                                    query: { desc:serfData.name },
                                                                })
                                                                } className="lh-base nav-btn  text-white arrow-animation " size="large"> 
                                                                View All Projects <span className='arrow-bounce '>{'>>'} </span></a>
                                                     </div>
                        {/* )} */}
                        </div>



                        <div className='proj-filter isotope-filter'>
                            <ul>
                                {/* <li className={id=='1'?'btn-active proj-filter-btn':'proj-filter-btn'} onClick={()=>setId('1')}>All</li>
                                <li className={id=='2'?'btn-active proj-filter-btn':'proj-filter-btn'} onClick={()=>setId('2')}>Fittings</li>
                                <li className={id=='3'?'btn-active proj-filter-btn':'proj-filter-btn'} onClick={()=>setId('3')}>Bathroom</li> */}
                                                          
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-view projects-masonry">
                
                <div>
                    <div className="row gx-md-8 gx-xl-9 gy-8 gy-xl-9 isotope mb-2">
                        <div className={id==1?'proj-animation':'hide'}>
                            <Swiper slidesPerView={4} spaceBetween={5} navigation={{
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
                                    "delay": 2800,
                                    "disableOnInteraction": false
                                }}
                                  >

                          {serfData.map((i, index) => 
                                <SwiperSlide  key={index}>
                                    <Card className='ks-img-effect ' bordered={false}hoverable style={{ width: 300 }}
                                        cover={
                                            <div style={{ overflow: "hidden", height: 400}}>
                                                <Image 
                                                placeholder="blur"
                                                blurDataURL={load}
                                                priority={true}
                                                    src={i.acf.main_image.url}
                                                  height={400}
                                                   width={300} 
                                                  alt="a1"/>
                                            </div>
                                        }
                                    >
                                        <div className="proj-overlay-box">
                                            <div className="proj-line">
                                                <div className="text-white ">
                                                    <Title level={4}><a className="text-white text-uppercase">{i.acf.Title }</a></Title>
                                                  
                                                    <p className='mb-10 white-text'>{i.acf.short_desc}</p>
                                                    {/* <a onClick={() => router.push('/gallary/')}  className="text-white fs-15 rm-hover"><RightOutlined  className='arrow-bounce'/></a> */}
                                                
                                                    <a
                                                                onClick={() => router.push({
                                                                    pathname: `/subworkproject`,
                                                                    query: { id:i.id},
                                                                })
                                                                } className="lh-base nav-btn  text-white arrow-animation " size="large"> 
                                                                Veiw Projects <span className='arrow-bounce '>{'>>'} </span></a>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                               )}

                            </Swiper>
                        </div>
                        
                    </div>











                        </div>


                    
                    <div className='proj-nav-box '>
                        <div className="">
                            <Space>
                                <a className="slide-prev-btn review-swiper-button-prev">
                                <span><ArrowLeftOutlined/>PREV</span>
                                </a>
                                <a className="slide-next-btn review-swiper-button-next">
                                <span>NEXT<ArrowRightOutlined/></span>
                                </a>
                            </Space>
                        </div>
                        </div>
                </div>
          
                


                
        </div>
    </section>
    )
}

export default ProjectComponent
