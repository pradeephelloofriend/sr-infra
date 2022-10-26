import React from 'react'
// import { Card,Typography } from 'antd';
import { useRouter } from 'next/router'

// import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { Typography, Card } from 'antd';
import load from '../../../public/img/loading.png'
import bu1 from '../../../public/img/about/s22.jpg'
import bu2 from '../../../public/img/about/s12.jpg'
import bu3 from '../../../public/img/about/s11.jpg'
import bu4 from '../../../public/img/about/s43.jpg'

const { Title, Text } = Typography;

const Showroomhome = () => {
    const router = useRouter()
   
    return (
        <section className='bg1-sec76'>
        <div className="container ">
            <div className="row pt-7 pb-7">
          
            <div className="col-md-12 ">
            <div className='kam-title '>
                    <Title level={2} className='pb-0 pt-7 text-uppercase'><span>OUR </span>Showroom </Title>
                   
                    </div>
            </div>


            <div className="col-md-3 move-up-class">
                     <div className='text-center ' onClick={() => router.push('/show-rooms/')}>
                        <Image placeholder="blur"
                                        blurDataURL={load}
                                        priority={true} src={bu1} height={280} width={400} alt="" />
                        <h2>  S.R. Furniture world karve, Chandgad </h2>
                        <div className='bary'></div>
                        
                    </div>
                </div>

                <div className="col-md-3  move-up-class">
                     <div className=' text-center' onClick={() => router.push('/show-rooms/')}>
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu2} alt="" height={280} width={400}/>
                         <h2>S.R. Furniture world udyamnagar, sawantwadi. </h2>
                         <div className='bary'></div>
                      

                      </div>
                </div>

                <div className="col-md-3 move-up-class">
                     <div className='text-center ' onClick={() => router.push('/show-rooms/')}>
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu3} alt="" height={280} width={400}/>
                         <h2>SR Furniture World Kudal</h2>
                         <div className='bary'></div>
                      
                      </div>
                </div>

                <div className="col-md-3 move-up-class">
                     <div className='text-center ' onClick={() => router.push('/show-rooms/')}>
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu4} alt="" height={280} width={400}/>
                         <h2>S.R Furniture World Malvan </h2>
                         <div className='bary'></div>
                        
                      </div>
                </div>

                
            </div>
        </div>
        </section>
    )
}

export default Showroomhome
