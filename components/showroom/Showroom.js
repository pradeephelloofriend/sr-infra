import React from 'react'
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCreative } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image'
   
import { Card,Typography } from 'antd';

import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/effect-creative"

import load from '../../public/img/loading.png'
import c1 from '../../public/img/about/showroom.jpg'

import c11 from '../../public/img/about/s21.jpg'
import c12 from '../../public/img/about/s22.jpg'
import c13 from '../../public/img/about/s23.jpg'
import c14 from '../../public/img/about/s24.jpg'



import c21 from '../../public/img/about/s11.jpg'
import c22 from '../../public/img/about/s12.jpg'
import c23 from '../../public/img/about/s13.jpg'
import c24 from '../../public/img/about/s14.jpg'

import c31 from '../../public/img/about/s31.jpg'
import c32 from '../../public/img/about/s32.jpg'
import c33 from '../../public/img/about/s33.jpg'
import c34 from '../../public/img/about/s34.jpg'

import c41 from '../../public/img/about/s41.jpg'
import c42 from '../../public/img/about/s42.jpg'
import c43 from '../../public/img/about/s43.jpg'
import c44 from '../../public/img/about/s44.jpg'


const{Text,Title}=Typography
SwiperCore.use([Navigation,Autoplay,EffectCreative]);
const Showroom = ({setAbtMenuRef ,aboutData}) => {
  //console.log('aboutData', aboutData)
  const router = useRouter()
  const about = React.useRef();
  React.useEffect(() => {
    //  setAbtMenuRef(about.current.offsetTop)
    //console.log('ref',contact)
  }, [])
  return (

    <section className="wrapper bg-1-1" ref={about}>
      <div className="container  ">
      {/* <div className='kam-title '>
                    <h2 className=' pb-0 pt-7 text-uppercase'><span>OUR </span>Showrooms </h2>
             </div> */}
        <div className='row  pt-7 pb-7'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <Image
            placeholder="blur"
            blurDataURL={load}
            priority={true}
              src={c1}
              //  
              alt="a1" />
          </div>




          {/* <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
           
              <div className="d-flex flex-row pt-10">
                <div>
                  <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
                </div>
                <div>
                  <h5 className="mb-0 ">Show-Room</h5>

                <ul>
                  <li>S.R. Furniture world karve, Chandgad</li>
                  <li>S.R. Furniture world udyamnagar, sawantwadi.</li>
                  <li>  SR Furniture World Kudal</li>
                  <li>  S.R Furniture World Malvan</li>
                </ul> 


                  <p className="blackcoloro"> <a href="https://www.google.com/maps/place/Supernova+Enterprises/@15.486844,73.8187528,19z/data=!4m5!3m4!1s0x3bbfc1e96aeeb557:0x4af0a03e259fe3c3!8m2!3d15.4869485!4d73.8190169">
                  S.R. Furniture world karve, Chandgad. </a> </p>
 
                
                  <p className="blackcoloro"> <a href="https://www.google.com/maps/place/Supernova+Enterprises/@15.486844,73.8187528,19z/data=!4m5!3m4!1s0x3bbfc1e96aeeb557:0x4af0a03e259fe3c3!8m2!3d15.4869485!4d73.8190169">
                  S.R. Furniture world udyamnagar, sawantwadi. </a> </p>

                  
                  <p className="blackcoloro"> <a href="https://www.google.com/maps/place/Supernova+Enterprises/@15.486844,73.8187528,19z/data=!4m5!3m4!1s0x3bbfc1e96aeeb557:0x4af0a03e259fe3c3!8m2!3d15.4869485!4d73.8190169">
                  SR Furniture World Kudal </a> </p>

                  
                  <p className="blackcoloro"> <a href="https://www.google.com/maps/place/Supernova+Enterprises/@15.486844,73.8187528,19z/data=!4m5!3m4!1s0x3bbfc1e96aeeb557:0x4af0a03e259fe3c3!8m2!3d15.4869485!4d73.8190169">
                  S.R Furniture World Malvan </a> </p> 

                </div>

            </div> */}











          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-7 text-uppercase'><span>OUR </span>Showrooms </h2>
            </div>

            <div className="d-flex flex-row pt-1">
              <div>
                <div> <i className="fa  colororange fs-28  mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Visit Our World Class Show-Room </h5>

                <ul>
                  <li>S.R. Furniture world karve, Chandgad</li>
                  <li>S.R. Furniture world udyamnagar, sawantwadi.</li>
                  <li>  SR Furniture World Kudal</li>
                  <li>  S.R Furniture World Malvan</li>
                </ul>
              </div>
            </div>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-0 text-uppercase'><span>OFFICE </span>LOCATION </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122763.61814585072!2d73.69089558806522!3d15.942405334314838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff5a9b768fe71%3A0x8bcdc46f7f30ad72!2sS.R.INDUSTRIES%20SAWANTWADI!5e0!3m2!1sen!2sin!4v1663329874794!5m2!1sen!2sin" width="600"
                height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>




          </div>
        </div>

{/* 111 */}
        <div className='row '>
          <div className='kam-title '>
            <h2 className=' pb-3 pt-7 text-uppercase text-center'><span>OUR </span>SHOWROOMS.</h2>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-7 text-uppercase'><span>1. </span>S.R. Furniture world karve, Chandgad. </h2>
            </div>

            <div className="d-flex flex-row pt-1">
              <div>
                <div> <i className="fa  colororange fs-28  mt-n1" aria-hidden="true"></i> </div>
              </div>

              <div className="d-flex flex-row">
                <div>
                  <div> <i className="fa fa-phone colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
                </div>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className=" d-md-block blackcoloro  mb-0 mt-n1" ><a href="tel:+919422946262">+91-9422946262</a></p>
                  <p className=" d-md-block blackcoloro  mb-4 mt-n1" ><a href="tel:+919373807744">+91-9373807744</a></p>
                </div>
              </div>


                {/* <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Address</h5>
               
               <p className="blackcoloro"> <a href="https://goo.gl/maps/MVSjKtnd6vznPQrY9">
               Serve no 31A / Hissa no 14A/19 , Laxminagar Khaskilwada , Sawantwadi </a> </p>
              </div>

            </div> */}

            </div>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-0 text-uppercase'><span>OFFICE </span>LOCATION </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122763.61814585072!2d73.69089558806522!3d15.942405334314838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff5a9b768fe71%3A0x8bcdc46f7f30ad72!2sS.R.INDUSTRIES%20SAWANTWADI!5e0!3m2!1sen!2sin!4v1663329874794!5m2!1sen!2sin" width="600"
                height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c11}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c12}
                  //  
                  alt="a1" />
              </div>

            </div>

            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c13}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c14}
                  //  
                  alt="a1" />
              </div>

            </div>
          </div>
        </div>


{/* 222 */}

        <div className='row pt-7'>
          <div className='kam-title '>
          
          </div>

          
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c21}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c22}
                  //  
                  alt="a1" />
              </div>

            </div>

            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c23}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c24}
                  //  
                  alt="a1" />
              </div>

            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-7 text-uppercase'><span>2. </span>S.R. Furniture world udyamnagar, Sawantwadi. </h2>
            </div>

            <div className="d-flex flex-row pt-1">
              <div>
                <div> <i className="fa  colororange fs-28  mt-n1" aria-hidden="true"></i> </div>
              </div>

              <div className="d-flex flex-row">
                <div>
                  <div> <i className="fa fa-phone colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
                </div>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className=" d-md-block blackcoloro  mb-0 mt-n1" ><a href="tel:+919422946262">+91-9422946262</a></p>
                  <p className=" d-md-block blackcoloro  mb-4 mt-n1" ><a href="tel:+919373807744">+91-9373807744</a></p>
                </div>
              </div>


                {/* <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Address</h5>
               
               <p className="blackcoloro"> <a href="https://goo.gl/maps/MVSjKtnd6vznPQrY9">
               Serve no 31A / Hissa no 14A/19 , Laxminagar Khaskilwada , Sawantwadi </a> </p>
              </div>

            </div> */}

            </div>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-0 text-uppercase'><span>OFFICE </span>LOCATION </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122763.61814585072!2d73.69089558806522!3d15.942405334314838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff5a9b768fe71%3A0x8bcdc46f7f30ad72!2sS.R.INDUSTRIES%20SAWANTWADI!5e0!3m2!1sen!2sin!4v1663329874794!5m2!1sen!2sin" width="600"
                height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>


{/* 333 */}

        
        <div className='row pt-4'>
          <div className='kam-title '>
           
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-7 text-uppercase'><span>3. </span>SR Furniture World Kudal. </h2>
            </div>

            <div className="d-flex flex-row pt-1">
              <div>
                <div> <i className="fa  colororange fs-28  mt-n1" aria-hidden="true"></i> </div>
              </div>

              <div className="d-flex flex-row">
                <div>
                  <div> <i className="fa fa-phone colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
                </div>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className=" d-md-block blackcoloro  mb-0 mt-n1" ><a href="tel:+919422946262">+91-9422946262</a></p>
                  <p className=" d-md-block blackcoloro  mb-4 mt-n1" ><a href="tel:+919373807744">+91-9373807744</a></p>
                </div>
              </div>

                {/* <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Address</h5>
               
               <p className="blackcoloro"> <a href="https://goo.gl/maps/MVSjKtnd6vznPQrY9">
               Serve no 31A / Hissa no 14A/19 , Laxminagar Khaskilwada , Sawantwadi </a> </p>
              </div>

            </div> */}


            </div>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-0 text-uppercase'><span>OFFICE </span>LOCATION </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122763.61814585072!2d73.69089558806522!3d15.942405334314838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff5a9b768fe71%3A0x8bcdc46f7f30ad72!2sS.R.INDUSTRIES%20SAWANTWADI!5e0!3m2!1sen!2sin!4v1663329874794!5m2!1sen!2sin" width="600"
                height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c31}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c32}
                  //  
                  alt="a1" />
              </div>

            </div>

            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c33}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c34}
                  //  
                  alt="a1" />
              </div>

            </div>
          </div>
        </div>


{/* 444 */}

        <div className='row pt-7'>
          <div className='kam-title '>
          
          </div>

          
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                  src={c41}
                  placeholder="blur"
                                        blurDataURL={load}
                                        priority={true}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c42}
                  //  
                  alt="a1" />
              </div>

            </div>

            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c43}
                  //  
                  alt="a1" />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                <Image
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                  src={c44}
                  //  
                  alt="a1" />
              </div>

            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
            <div className='kam-title '>
              <h2 className=' pb-0 pt-7 text-uppercase'><span>4. </span>S.R Furniture World Malvan. </h2>
            </div>

            <div className="d-flex flex-row pt-1">
              <div>
                <div> <i className="fa  colororange fs-28  mt-n1" aria-hidden="true"></i> </div>
              </div>

              <div className="d-flex flex-row">
                <div>
                  <div> <i className="fa fa-phone colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
                </div>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className=" d-md-block blackcoloro  mb-0 mt-n1" ><a href="tel:+919422946262">+91-9422946262</a></p>
                  <p className=" d-md-block blackcoloro  mb-4 mt-n1" ><a href="tel:+919373807744">+91-9373807744</a></p>
                </div>
              </div>
            </div>

            {/* <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Address</h5>
               
               <p className="blackcoloro"> <a href="https://goo.gl/maps/MVSjKtnd6vznPQrY9">
               Serve no 31A / Hissa no 14A/19 , Laxminagar Khaskilwada , Sawantwadi </a> </p>
              </div>

            </div> */}

            <div className='kam-title '>
              <h2 className=' pb-0 pt-0 text-uppercase'><span>OFFICE </span>LOCATION </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122763.61814585072!2d73.69089558806522!3d15.942405334314838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff5a9b768fe71%3A0x8bcdc46f7f30ad72!2sS.R.INDUSTRIES%20SAWANTWADI!5e0!3m2!1sen!2sin!4v1663329874794!5m2!1sen!2sin" width="600"
                height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>



      </div>
    </section>

  )
}

export default Showroom
