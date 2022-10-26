import React from 'react'
import { useRouter } from 'next/router'
import 'swiper/css';
const Breadmanagement = () => {
    
    const router=useRouter()


    
    return (
       


    <section className="wrapper cta-one page-header ">

    <div className="page-header-bg  decorative6 ">
    </div>
    <div className="page-header-bg-overly"></div>
    <div className="page-header-shape wow slideInRight  bgbreadimg2" data-wow-delay="100ms" data-wow-duration="2500ms"></div>
    <div className="container">
 
        <div  className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a onClick={() => router.push('/')}>Home</a></li>
                <li><span>/</span></li>
                <li>Management </li>
            </ul>
           
            <h2 >Our Management
             </h2>
            
        </div>
  
    </div>

</section>
    )
}

export default Breadmanagement

