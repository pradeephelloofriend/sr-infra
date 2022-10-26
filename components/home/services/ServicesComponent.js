import React from 'react'

import useWindowDimensions from '../../../hooks/useWindowDimensions';

import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card, Typography, Tabs } from 'antd';
import { RightOutlined, SlackOutlined } from '@ant-design/icons';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import load from '../../../public/img/loading.png'



SwiperCore.use([Navigation]);
const { Text, Title } = Typography


// const operations = <Text>Extra Action</Text>;
const ServicesComponent = ({ serData }) => {
    //console.log('serData', serData)
    const router = useRouter()
    const { TabPane } = Tabs;
    const { height, width } = useWindowDimensions();

    //console.log("width", width)
    return (

        <section className="wrapper bg-gray  service-area product-word-img">

            <div className="container  py-12 py-md-10">
                <div className='kam-title mb-6'>
                    <Title level={2} className='mb-0'><span>OUR </span>WORKS </Title>
                    <Text>	Quality Services and Products in Steel fabrication, Furniture, Pipe-lines and Construction industry and always be front leader in development of human society</Text>
                </div>
                <div className='service-tab-area'>
                    <Tabs
                        tabPosition={(width > 300 && width < 1025) ? "top" : "left"}
                    // tabPosition="top"
                    >

                        {serData.map((i, index) =>

                            <TabPane key={index} tab={<a aria-details={i.name}>  {i.name} </a>}  >
                                <div className='swiper-service'>

                                    <Card className='bg-1-2 proj-animation ' bordered={false} hoverable
                                        // service-item style={{ width: 1000 }}
                                        cover={
                                            <div style={{ overflow: "hidden" }}>
                                                {/* , height: 350 */}

                                                <div className='row py-4 px-4'>
                                                    <div className='col-12 col-md-6  col-lg-6'>
                                                        <div style={{ overflow: "hidden" }}>

                                                            <Image 
                                                            placeholder="blur"
                                                            blurDataURL={load}
                                                            priority={true}
                                                            src={i.acf.main_image.url}
                                                                alt={i.name}
                                                                height={300}
                                                                width={500}
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className='col-12 col-md-6 col-lg-6'>
                                                        <h1>{i.name}</h1>
                                                        <p>	{i.description}</p>
                                                        <div className="d-flex r-nav-item">

                                                            <a
                                                                onClick={() => router.push({
                                                                    pathname: `/works/${i.slug}`,
                                                                    query: { desc:i.name },
                                                                })
                                                                } className="lh-base nav-btn  text-white arrow-animation " size="large"> 
                                                                Veiw all <span className='arrow-bounce '>{'>>'} </span></a>
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        }
                                    >

                                    </Card>

                                </div>
                            </TabPane>

                        )}


                        {/* 
                        <TabPane tab={<a aria-details='PEB STRUCTURE '> PEB STRUCTURE</a>} key="2">
                        <div className='swiper-service'>
                        <Card className=' proj-animation' bordered={false} hoverable 
                                    service-item style={{ width: 1000 }}
                                    cover={
                                        <div style={{ overflow: "hidden" }}>
                                            , height: 350

                                            <div className='row py-4 px-4'>
                                                <div className='col-12 col-md-6  col-lg-6'>
                                                    <div style={{ overflow: "hidden" }}>

                                                        <Image src={gm2}
                                                            alt="a1"
                                                            height={300}
                                                            width={500}
                                                        />
                                                    </div>

                                                </div>

                                                <div className='col-12 col-md-6 col-lg-6'>
                                                    <h1>PEB STRUCTURE</h1>
                                                    <p>	We execute all types of civil construction projects for Industrial, institutional
                                                        and residential applications.We have built over 6,00,000 sq ft. of floor space and have recently also ventured into roadwork.</p>

                                                </div>
                                            </div>


                                        </div>
                                    }
                                >

                                </Card>
                            </div>
                        </TabPane> */}

                        {/* <TabPane tab={<a aria-details='PIPE LINE'>PIPE LINE</a>} key="3">
                        <div className='swiper-service'>
                                <Card className=' proj-animation' bordered={false} hoverable 
                                   
                                    cover={
                                        <div style={{ overflow: "hidden" }}>
                                           

                                            <div className='row py-4 px-4'>
                                                <div className='col-12 col-md-6  col-lg-6'>
                                                    <div style={{ overflow: "hidden" }}>

                                                        <Image src={gm2}
                                                            alt="a1"
                                                            height={300}
                                                            width={500}
                                                        />
                                                    </div>

                                                </div>

                                                <div className='col-12 col-md-6 col-lg-6'>
                                                    <h1>PIPE LINE</h1>
                                                    <p>	We execute all types of civil construction projects for Industrial, institutional
                                                        and residential applications.We have built over 6,00,000 sq ft. of floor space and have recently also ventured into roadwork.</p>

                                                </div>
                                            </div>


                                        </div>
                                    }
                                >

                                </Card>
                            </div>
                        </TabPane> */}

                        {/* <TabPane tab={<a aria-details='INTERIOR DESIGN'> INTERIOR DESIGN</a>} key="4">
                        <div className='swiper-service'>
                        <Card className=' proj-animation' bordered={false} hoverable 
                                    service-item style={{ width: 1000 }}
                                    cover={
                                        <div style={{ overflow: "hidden" }}>
                                            , height: 350

                                            <div className='row py-4 px-4'>
                                                <div className='col-12 col-md-6  col-lg-6'>
                                                    <div style={{ overflow: "hidden" }}>

                                                        <Image src={gm2}
                                                            alt="a1"
                                                            height={300}
                                                            width={500}
                                                        />
                                                    </div>

                                                </div>

                                                <div className='col-12 col-md-6 col-lg-6'>
                                                    <h1>INTERIOR DESIGN</h1>
                                                    <p>	We execute all types of civil construction projects for Industrial, institutional
                                                        and residential applications.We have built over 6,00,000 sq ft. of floor space and have recently also ventured into roadwork.</p>

                                                </div>
                                            </div>


                                        </div>
                                    }
                                >

                                </Card>
                            </div>
                        </TabPane> */}


                        <TabPane disabled tab={
                            <div style={{ width: 300 }}>
                                <Title className='text-theme-color' style={{ fontWeight: 500 }} level={5}>Did you find what you need?</Title>

                                <a onClick={() => router.push('/query/')}><Text className='ft-right'>Contact Us<RightOutlined className='arrow-bounce' /></Text></a>
                            </div>
                        } key="5">

                        </TabPane>
                    </Tabs>
                    <div className='mt-3'>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServicesComponent
