import { Card, Typography, Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Image from 'next/image'
import load from '../../public/img/loading.png'
const SubTabComponent = ({ workData, name }) => {

    const [data, setData] = useState([])

    useEffect(() => {

        //console.log('name', name)
        setData(workData.filter(d => d.acf.works_category.name == name))
    }, [name]);
    //console.log('data', data)
    const router = useRouter()

    return (

        <>
            {data?.length >= 1 ? data.map((d, ind) =>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={ind}>
                    <a
onClick={() => {
        router.push({
          pathname: '/subworkproject',
          query: { id: d.id },
        })
      }}
      >
                    <div className='white-bg-color1'>


                        <div style={{ overflow: "hidden", height: 270 }}>

                            <Image 
                            placeholder="blur"
                            blurDataURL={load}
                            priority={true}src={d.acf.main_image.url}
                                className="hovereffect007"
                                alt="img1"
                                height={450}
                                width={500}
                            />
                        </div>

                        <div className='py-4 px-4'>
                            <h2>{d.acf.title}</h2>
                            <div className='barb'></div>
                            <p>
                                {d.acf.short_desc}
                            </p>
                        </div>

                    </div>
                    </a>
                </div>

            )
                : null}
        </>





    );



}

export default SubTabComponent;