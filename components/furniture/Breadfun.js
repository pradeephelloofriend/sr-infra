import React from 'react'
import { useRouter } from 'next/router'
import 'swiper/css';
const Breadfun = ({serData}) => {
    
    const router=useRouter()


    //console.log("serData",serData)
 
    return (
       
    //     <section className="wrapper cta-one page-header ">


    //         <div className="page-header-bg  decorative6 ">
    //         </div>
    //         <div className="page-header-bg-overly"></div>
    //         <div className="page-header-shape wow slideInRight  bgbreadimg2" data-wow-delay="100ms" data-wow-duration="2500ms"></div>
    //         <div className="container">
    //             <div className="page-header__inner">
    //                 <ul className="thm-breadcrumb list-unstyled">
    //                     <li><a onClick={() => router.push('/')}>Home</a></li>
    //                     <li><span>/</span></li>
    //                     <li>Works </li>
    //                 </ul>
    //                 <h2>
    //                     {desc} 
    //                  </h2>
    //             </div>
    //         </div>

    // </section>


    <section className="wrapper cta-one page-header ">

    <div className="page-header-bg funiture-us-bg ">
    </div>
    <div className="page-header-bg-overly"></div>
    <div className="page-header-shape wow slideInRight  bgbreadimg2" data-wow-delay="100ms" data-wow-duration="2500ms"></div>
    <div className="container">
 
        <div  className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a onClick={() => router.push('/')}>Home</a></li>
                <li><span>/</span></li>
                <li>Furniture </li>
            </ul>
           
            <h2 >Furniture
             </h2>
            
        </div>
  
    </div>

</section>
    )
}

export default Breadfun

