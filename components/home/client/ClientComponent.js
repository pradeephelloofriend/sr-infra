import React from 'react'
import { Card,Typography,Tabs } from 'antd';
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import load from '../../../public/img/loading.png'


const { Title ,Text} = Typography;
const ClientComponent = ({clientData}) => {
    //console.log('clientData',clientData)
    return (
        <section className="wrapper bg-light client-area">
            <div className="container py-12 py-md-12">
                <div className='row'>
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className='kam-title mb-6 text-center'>
                            <Title level={2} className='mb-0'><span>OUR</span> PARTNER</Title>
                        
                        </div>
                    </div>
                </div>
                <div className='position-realtive '>
                <Marquee   speed={50}>
                {clientData[0].acf.logo.map((i, index) =>
                   
                        
                        <Image key={index} src={i.url}
                        placeholder="blur"
                                        blurDataURL={load}
                                        priority={true}
                        // {i.acf.logo.url}
                          width={145} 
                          height={140}  alt=""/>
                          )}  
                    </Marquee>
                
                </div>
            </div>
        </section>

        
    )
}

export default ClientComponent
