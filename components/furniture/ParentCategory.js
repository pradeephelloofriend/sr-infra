import { Card, Typography, Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image'
import c1 from '../../public/img/about/me.jpg'
import load from '../../public/img/loading.png'
function ParentCategory({ data, title,code }) {
const [fData,setFdata]=React.useState(null)
  //console.log('data', data)
    /*React.useEffect(()=>{
        if(data?.length >= 1 ){
            setFdata(data.filter(d => d.acf?.sub_category?.term_id == code))
        }
    },[data])*/
    //console.log('fData',fData)
    return (
        <>
            <div className='row mt-7 mb-4 px-4 ' >
                <div className='col-sm pt-3 pb-3' >
                    <h1 style={{ margin: 0 }}>
                        {/* {s.acf?.sub_category?.name} */}
                        {title}
                    </h1>
                </div>
            </div>
            <SRLWrapper >
            <div className='row mt-7 mb-4 px-4 '>
                {data.acf?.other_images.map((s,index) =>

                            <div className='col-lg-4 col-md-12 col-sm-12 pt-3 pb-3' key={index} >



                                <div style={{ overflow: "hidden", }}>
                                    
                                        <Image 
                                        placeholder="blur"
                                        blurDataURL={load}
                                        priority={true}
                                        src={s.url}

                                            className="hovereffect007"
                                            alt={s.title}
                                            height={450}
                                            width={600}
                                            
                                        />
                                    
                                </div>

                            </div>
                            
    ) }
            </div>
</SRLWrapper >
        </>
    );
}

export default ParentCategory;