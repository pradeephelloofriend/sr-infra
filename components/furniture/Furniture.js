import React from 'react'
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCreative } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image'
import { RightOutlined} from '@ant-design/icons';
import { Card,Typography,Tabs } from 'antd';

import Subfurniture from './Subfurniture'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/effect-creative"
import { useState } from 'react';
const { Text, Title } = Typography
SwiperCore.use([Navigation, Autoplay, EffectCreative]);
const WorksComp = ({ workData,serData,funData2, code }) => {



    const router = useRouter()
    const about = React.useRef();
    const { TabPane } = Tabs;
    const { height, width } = useWindowDimensions();
    /*code by pradeep*/
    const [catWiseData,setCatWiseData]=React.useState(null)
    const [tabKey,setTabKey]=React.useState(code==undefined?'51':String(code))
    
    //console.log("width", width)
    React.useEffect(() => {
        /*code by pradeep*/
        const catData=workData.filter(d=>d.acf.category.term_id==tabKey)
        setCatWiseData(catData)
        //  setAbtMenuRef(about.current.offsetTop)
        //console.log('code',code)

    }, [tabKey,workData,code])

     //console.log("original serDate", serData)
    //console.log("original workData", workData)

    return (
        <section className="wrapper bg-light  about-area pt-11 pb-12 " ref={about}>
            <div className='abt-top-box '>

                <Tabs
                    tabPosition={(width > 300 && width < 1225) ? "top" : "right"}
                    defaultActiveKey='51' 
                    activeKey={String(tabKey)} 
                    onChange={(key)=>setTabKey(key)}
                    >
                    {serData.map((i, index) =>

                        <TabPane  key={i.id} 
                         tab={<a  aria-details={i.name}>  {i.name}  </a>}  >
                            <div className='swiper-service '>
                                <Card className=' proj-animation' bordered={false} hoverable
                                    // service-item style={{ width: 1000 }}
                                    cover={
                                        <div className='' style={{ overflow: "hidden" }}>
                                            <div className='m-1 abt-content'>
                                                {catWiseData!==null?
                                                <Subfurniture name={i.name} workData={catWiseData} />
                                                :
                                                
                                                <></>}
                                                 
                                                </div>
                                            </div>
                                        
                                    }
                                >
                                </Card>

                            </div>
                        </TabPane>

                     )} 



                </Tabs>

                
            </div>

        </section>

    )
}

export default WorksComp
