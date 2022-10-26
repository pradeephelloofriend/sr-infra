import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectWorkCatData } from '../../redux/services/serviceSelector'
import load from '../../public/img/loading.png'
import logo from '../../public/img/home/footer.png'
const FooterComponent = ({ worksCatData }) => {
//console.log('worksCatData',worksCatData)
  const router = useRouter()
    return (
        <footer className="bg-dark text-inverse">
        <div className="container pt-7 pt-md-10 pb-7">
          <div className="row gy-6 gy-lg-0">
            <div className="col-lg-4">
              <div className="widget">
                <div className='navbar-brand'>
                    <a onClick={()=>router.push('/') } ><Image 
                    placeholder="blur"
                    blurDataURL={load}
                    priority={true}
                    src={logo} height={110} width={350} alt="a1"/></a>
                  
                </div>
                <p className="lead mb-5"> S. R. Steel Industries has in-house manufacturing capabilities for all 
                types of furniture and PEB structures spread across over 1,00,000 sq ft. and showcases their products in 5 showrooms.</p>
                <a href="mailto:srsteelindustries@rediffmail.com" className="btn btn-white  rounded-pill">Join Us</a>
              </div>
              
            </div>
            
            <div className="col-md-4 col-lg-3 offset-lg-2">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Links</h4>
                {/* <ul className="list-unstyled text-reset mb-0">
                  
                  <li><a onClick={() => router.push('/flooring/')}>Construction </a></li>
                  <li><a onClick={() => router.push('/chemical/')}>Pre-Engineered Building</a></li>
                  <li><a onClick={() => router.push('/breezeblocks/')}>Pipe Line </a></li>
                  <li><a onClick={() => router.push('/bathroom/')}>Interior Design </a></li>
                  
                
                </ul> */}
                {worksCatData!==null?worksCatData.map((d,idx)=>
                <div key={idx}>
                <ul className="list-unstyled text-reset mb-0">
                <li> <a
                  onClick={() => router.push({
                    pathname: `/works/${d.slug}`,
                    query: { desc: d.name },
                  })
                  } className="lh-base nav-btn  text-white arrow-animation " size="large">{d.name} </a>
                </li>
               
                </ul>
                </div>
                
                ):<></>}
 <ul className="list-unstyled text-reset mb-0">
<li><a onClick={() => router.push('/furniture/')}>Furniture </a></li>
</ul>


                {/*{serData.map((i, index) =>
                <div key={index}>
                <ul >
                <li> <a
                  onClick={() => router.push({
                    pathname: `/works/${i.slug}`,
                    query: { desc: i.name },
                  })
                  } className="lh-base nav-btn  text-white arrow-animation " size="large">Veiw all </a>
                </li>
                </ul>
                </div>
                )} */}
              
              </div>

            </div>
            
            


           


            
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white ">Get in Touch</h4>
                

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491782.91173201206!2d73.57045850523919!3d15.642112762285754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff5a9b768fe71%3A0x8bcdc46f7f30ad72!2sS.R.INDUSTRIES%20SAWANTWADI!5e0!3m2!1sen!2sin!4v1663159439807!5m2!1sen!2sin" width="350" height="250"   loading="lazy" ></iframe>
              </div>
              
            
            </div>
           
            
            
          </div>
          
          <hr className="mt-5 mt-md-5 mb-7" />
          <div className="d-md-flex align-items-center justify-content-between">
            <p className="mb-2 mb-lg-0">SR INDUSTRIES © 2022 Kamsoft Technologies. All rights reserved.</p>
            <nav className="nav social social-white text-md-end">
              <a href="#"><i className="uil uil-twitter"></i></a>
              <a href="#"><i className="uil uil-facebook-f"></i></a>
              <a href="#"><i className="uil uil-dribbble"></i></a>
              <a href="#"><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-youtube"></i></a>
            </nav>
            
          </div>
          
        </div>
        
      </footer>
    )
}
const mapStateToProps=createStructuredSelector({
worksCatData:selectWorkCatData
})
export default connect(mapStateToProps) (FooterComponent)
