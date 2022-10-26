import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'


import load from '../../public/img/loading.png'





const Management = ({manData}) => {
  
  //console.log('manData',manData)
    return (
        
      <section className="wrapper bg-1-1    ">
        <div className="container ">

          <div className="section-title3">
          <div className='kam-title '>
                    <h2 className='mb-0 pb-4 pt-7 text-uppercase'><span>OUR </span>Management </h2>
             </div>
            <div className="bar"></div>
          </div>

          <div className="row">

          {/* onClick={() => goToPage('solution', '2')} */}
        {manData.acf.member.map((i, index) => 
            <div
           key={index} 
             className="col-lg-3 col-md-6 col-12 pt-md-2 pt-sm-4 pb-8 pt-lg-0 pt-2 goldone"><a >
              <div className="container2">
                <Image 
                placeholder="blur"
                blurDataURL={load}
                priority={true}
                src={i.image.url} 
                       width={500}
                       height={620} 
                        alt="a1" 
                        className="image" />

                <div className="overlay22">
                   <div className="text22">
                   
                     <p>{i.description} </p>
                   </div>
                </div>
              </div>
              <div className="container4">
                <div className="overlay24">
                  <h2><div className="text44">{i.name} </div></h2>
                  <p><div className="text48 pt-0"> {i.position}  </div></p>
                </div>
              </div>
           </a> </div>
        )}

           


          </div>
        </div>
      </section>
    )
}




export default Management
