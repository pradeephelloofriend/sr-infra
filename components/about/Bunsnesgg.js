import React from 'react'
// import { Card,Typography } from 'antd';


// import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import { Typography, Card } from 'antd';
import load from '../../public/img/loading.png'
import bu1 from '../../public/img/bu/1b.jpg'
import bu2 from '../../public/img/bu/2b.jpg'
import bu3 from '../../public/img/bu/3b.jpg'
import bu4 from '../../public/img/bu/4b.jpg'

const { Title, Text } = Typography;

const Bunsnesgg = () => {
   
    return (
        <section className='bg1-sec76'>
        <div className="container ">
            <div className="row pt-7 pb-7">
          
            <div className="col-md-12 ">
            <div className='kam-title '>
                    <Title level={2} className='pt-2 pt-7 text-uppercase'><span>OUR </span>Group of Companies </Title>
                    </div>
            </div>


            <div className="col-md-3 move-up-class">
                     <div className=' ' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                        <Image 
                        placeholder="blur"
                                        blurDataURL={load}
                                        priority={true}
                                        src={bu1} alt="" />
                        <h2>S. R. Steel Industries  </h2>
                        <div className='barf'></div>
                        <p>
                            Manufacturer of Steel, Wooden and Modular Furniture
                            We are manufacturing Metal Steel and Stainless Steel, Wooden Furniture, Soft furnishing such as Cushion and
                            Modular furniture supply with all powder coated furniture.
                        </p>
                    </div>
                </div>

                <div className="col-md-3  move-up-class">
                <div className=' ' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu2} 
                         alt="" />
                         <h2> Infra-Project Solution  </h2>
                         <div className='barf'></div>
                        <p>
                        Provide solutions for Project Development activities.
                       Project Job work include Civil and Infrastructural Project development, pipeline fabrication and Pipe-line laying
                      start from design to execution.
                        </p>

                      </div>
                </div>

                <div className="col-md-3 move-up-class">
                <div className=' ' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu3} 
                         alt="" />
                         <h2>Mauli Associates </h2>
                         <div className='barf'></div>
                        <p>
                        Industrial or Contract job work such as Painting work, Labor supply contracts, Transportation, Storage facilities 
                        and Electricals contracts or any other such work that involved labor supply.
                        </p>
                      </div>
                </div>

                <div className="col-md-3 move-up-class">
                <div className=' ' 
                    //  onClick={() => goToPage('/about-us/about-company/')}
                     >
                         <Image 
                         placeholder="blur"
                         blurDataURL={load}
                         priority={true}
                         src={bu4} alt="" 
                         />
                         <h2>S.R. UDYOG LLP  </h2>
                         <div className='barf'></div>
                        <p>
                        Civil and Real estate’s development contract work’s
                        We have executed many projects related to Civil and Construction Works, Plot Development, Road- Works,
                         Reservoir Construction  PEB Structures etc.
                        </p>
                      </div>
                </div>

                
            </div>
        </div>
        </section>
    )
}

export default Bunsnesgg
