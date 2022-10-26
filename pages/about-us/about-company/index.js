import React from 'react'

import Vision from '../../../components/about/Vision'

import Videosec from '../../../components/about/Videosec'
import AboutUsComponent from '../../../components/home/about/AboutUsComponent'
import Bunsnes from '../../../components/about/Bunsnesgg'
import AddBlockComponent from '../../../components/home/add/AddBlockComponent'
export async function getServerSideProps() {
    //-------------------------------------------------------
    const aboutAreaData = await fetch(`${process.env.API_PATH}/pages/578`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.JWT_TOKEN}` 
        }
      })
    const aboutData = await aboutAreaData.json() 

    return { props: {aboutData }}
}




const index = ({aboutData}) => {
 // const router=useRouter();
  //console.log('service',router)

  
 

    return (
        <>
    
      
        <AboutUsComponent aboutData={aboutData}/>
        
        <Bunsnes/>
      
        <Vision/>
        <AddBlockComponent aboutData={aboutData}/>
       
        {/* <Videosec/> */}
        </>
    )
}

export default index