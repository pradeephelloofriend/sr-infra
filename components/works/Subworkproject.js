import React from 'react'
import { Container } from 'react-bootstrap';
import { Typography } from 'antd';
import { Table } from 'react-bootstrap';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Button } from 'antd';

import load from '../../public/img/loading.png'



const { Text, Title } = Typography
const Subworkproject = ({ workData, code }) => {
    //console.log('workData', workData, code)
    return (
        <>
            <section className="wrapper bg-white subproject">
                <div className="container px-4 py-10">
                    <div className="row   gx-16 mainrow">

                        {workData
                        .filter(d=>d.id==code)
                        .map((i, index) =>
                            <div key={index} className="col-lg-7 ">

                          
                                      <div style={{ overflow: "hidden"  }}>
                                            <Image
                                              placeholder="blur"
                                              blurDataURL={load}
                                              priority={true}
                                                 src={i.acf.main_image.url}
                                                height={400}
                                                width={700}
                                                alt="a1" />
                                        </div>
                                <Title level={2} className='mb-2 text-theme-color'>
                                    {i.acf.other_info.title}
                                </Title>
                                <p>
                                    {i.acf.short_desc}<br /><br /><br />
                                    {i.acf.main_desc}
                                </p>
                            </div>
                        )}

                        <div className="col-lg-5">
                            <Title level={3} className='mt-8'>At a Glance</Title>
                            <Table striped  >
                                <tbody>
                                {workData
                                .filter(d=>d.id==code)
                                .map((i, index) =>
                                    <tr  key={index}>
                                        <td
                                            className="p-2  ps-2">
                                                {i.acf?.glance?.length>=1? i.acf?.glance[0]?.name:''}
                                                  {/* {i.acf?.glance[0]?.name} */}
                                            {/* {p.title} */}
                                            :</td>
                                        <td className="p-2 ps-2">
                                        {i.acf?.glance?.length>=1? i.acf?.glance[0]?.value:''}
                                        </td>
                                        {console.log('shawn', i)}

                                    </tr>
                                    )} 
                                </tbody>
                            </Table>

                        </div>


                    

                        <div className="col-lg-12">

                        <Title level={3} className='mt-8'>Project Summary</Title>

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
                                    440: {
                                        width: 450,
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        width: 460,
                                        slidesPerView: 1,
                                    },


                                }}

                            >

                                    {workData
                                     .filter(d=>d.id==code)
                                    .filter(d=>d.acf.other_images!==false)
                                    .map((i, index) =>
                                <SwiperSlide >
                            
                                    <Card
                                         key={index} 
                                        className='ks-img-effect p-0 col-md-12 col-xl-4 col-sm-11   pb-1  pl-2' bordered={false} hoverable style={{ width: 270 }}>
                                        <div style={{ overflow: "hidden", height: 160 }}>
                                        

                                            <Image
                                               placeholder="blur"
                                               blurDataURL={load}
                                               priority={true}
                                                src={i.acf.other_images[0].url}
                                                height={200}
                                                width={300}
                                                alt="a1" /> 
                                        </div>

                                    </Card>


                                </SwiperSlide>

                                )}


                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Subworkproject