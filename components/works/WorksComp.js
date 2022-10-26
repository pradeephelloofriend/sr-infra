import React from 'react'
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCreative } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image'
import { RightOutlined} from '@ant-design/icons';
import { Card,Typography,Tabs } from 'antd';
//import a1 from '../../public/img/wall/wall1.jpg'
import SubTabComponent from './SubTabComponent'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/effect-creative"
import { useState } from 'react';
const { Text, Title } = Typography
SwiperCore.use([Navigation, Autoplay, EffectCreative]);
const WorksComp = ({ setAbtMenuRef,workData,serData, code }) => {
    const [activekeyy, setActiveKey]=useState('0')

    const router = useRouter()
    const about = React.useRef();
    const { TabPane } = Tabs;
    const { height, width } = useWindowDimensions();

    
    React.useEffect(() => {
        //  setAbtMenuRef(about.current.offsetTop)
        //console.log('ref',contact)
        if(code){
        const currObj= serData.find(d=>d.name==code)
        const indexOfObj= serData.indexOf(currObj)
        if(indexOfObj!==-1){ setActiveKey(indexOfObj)}
       }
    }, [code])

    // console.log("serDate", serData)
    // console.log("work", workData)

 //console.log("Component")


    return (
        <section className="wrapper bg-1-2  about-area pt-11 pb-12" ref={about}>
            <div className='abt-top-box '>

                <Tabs
                 activeKey={String(activekeyy)} 
                 onChange={(key)=>setActiveKey(key)}
                    tabPosition={(width > 300 && width < 1225) ? "top" : "right"}

                >
                    {serData.map((i, index) =>

                        <TabPane  key={index}
                         tab={<a  aria-details={i.name}>  {i.name}  </a>}  >
                            <div className='swiper-service'>
                                <Card className=' proj-animation' bordered={false} hoverable
                                    // service-item style={{ width: 1000 }}
                                    cover={
                                        <div className='' style={{ overflow: "hidden" }}>
                                            <div className='m-1 abt-content'>
                                                <div className='row mt-7 mb-4 px-4 '>
                                                 <SubTabComponent name={i.name} workData={workData} />
                                                </div>
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
