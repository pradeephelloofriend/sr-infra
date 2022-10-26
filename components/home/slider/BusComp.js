import React from 'react'
import { Card,Typography } from 'antd';


import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { RightOutlined} from '@ant-design/icons';
import load from '../../../public/img/loading.png'
import bu1 from '../../../public/img/bu/1b.jpg'
import bu2 from '../../../public/img/bu/2b.jpg'
import bu3 from '../../../public/img/bu/3b.jpg'
import bu4 from '../../../public/img/bu/4b.jpg'


const { Text, Title } = Typography
const BusComp = ({ router }) => {
    const [active, setActive] = React.useState(1)

    //console.log(router)
    function goToPage(path, id) {
        setActive(id)
        router.push(`/${path}`)
    }
    return (
        <div className="container pt-lg-6 pt-md-16 pt-sm-13 pt-23">
            <div className="row mt-n50p mb-n5">


            <div className="col-md-3 mx-auto g-xxl-1 move-up-class">
                     <div className='bu-content-p p-2' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu1} alt="" />
                         <h2 className='text-center fs-18'>S. R. Steel Industries   </h2>
                         <div className='bary'></div>
                      </div>
                </div>

                <div className="col-md-3 mx-auto g-xxl-1 move-up-class">
                <div className='bu-content-p p-2' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu2} alt="" />
                         <h2 className='text-center fs-18'>Infra-Project Solution  </h2>
                         <div className='bary'></div>
                      </div>
                </div>

                <div className="col-md-3 mx-auto g-xxl-1 move-up-class">
                <div className='bu-content-p p-2' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu3} alt="" />
                         <h2 className='text-center fs-18'>Mauli Associates  </h2>
                         <div className='bary'></div>
                      </div>
                </div>

                <div className="col-md-3 mx-auto g-xxl-1 move-up-class">
                <div className='bu-content-p p-2' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu4} alt="" />
                         <h2 className='text-center fs-18'>S.R. UDYOG LLP  </h2>
                         <div className='bary'></div>
                      </div>
                </div>



                {/* <div className="col-md-3 mx-auto g-xxl-1">
                    <div className='bu-content-p' onClick={() => goToPage('flooring', 1)}>
                        <Card hoverable className={active == 1 ? 'bu-card-gas active-gas' : 'bu-card-gas '} bordered={false} style={{ height: 212 }}>
                            
                            <Card bordered={false} className='bu-cover-box' cover={<Image src={bu1} alt="" />} />
                        </Card>
                    </div>
                </div> 

                <div className="col-md-4 g-xxl-1">
                    <div className='bu-content-p' onClick={() => goToPage('chemical', 2)}  >
                        <Card hoverable className={active == 2 ? 'bu-card-auto active-auto ' : 'bu-card-auto '} bordered={false} style={{ height: 212 }}>
                          
                            <Card bordered={false} className='bu-cover-box' cover={<Image src={bu2} alt="" />} />
                        </Card>
                    </div>
                </div>

                <div className="col-md-4 mx-auto g-xxl-1">
                    <div className='bu-content-p' onClick={() => goToPage('bathroom', 3)} >
                        <Card hoverable className={active == 3 ? 'bu-card-green active-green' : 'bu-card-green '} bordered={false} style={{ height: 212 }}>
                          
                            <Card bordered={false} className='bu-cover-box' cover={<Image src={bu3} alt="" />} />
                        </Card>
                    </div>
                </div>
                 */}
                
            </div>
        </div>
    )
}

export default BusComp
