import React from 'react'
/*export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_PATH}/produt-tab-area`)
    const data = await res.json()
    return { props: { data}}
}*/
import SliderComponent from '../components/home/slider/SliderComponent'
import AboutUsComponent from '../components/home/about/AboutUsComponent'
import ServicesComponent from '../components/home/services/ServicesComponent'
import AddBlockComponent from '../components/home/add/AddBlockComponent'
import ProjectComponent from '../components/home/project/ProjectComponent'
import ClientComponent from '../components/home/client/ClientComponent'
import Testimonial from '../components/home/testmonial/Testimonial'
import Labour from '../components/home/labour/Labour'
import Showroomhome from '../components/home/showroomhome/Showroomhome'
import Furniturehome2 from '../components/home/Furniture/Furniturehome2'

import Query from '../components/query/Query'
import Midsection from '../components/home/midsection/Midsection'

export async function getServerSideProps() {
    //-------------------------------------------------------
// home page
    const aboutAreaData = await fetch(`${process.env.API_PATH}/pages/578`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.JWT_TOKEN}` 
        }
      })
    const aboutData = await aboutAreaData.json() 

// service

    const serviceAreaData = await fetch(`${process.env.API_PATH}/work_category`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.JWT_TOKEN}` 
      }
    })
  const serData = await serviceAreaData.json() 


// furniture
  const funAreaData = await fetch(`${process.env.API_PATH}/furnitures`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
const funData = await funAreaData.json() 
   
// furniture2
const fun2AreaData = await fetch(`${process.env.API_PATH}/furniture_category`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const funData2 = await fun2AreaData.json() 
 

// client
  const clientAreaData = await fetch(`${process.env.API_PATH}/partners`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
const clientData = await clientAreaData.json() 

// testimonal
const testAreaData = await fetch(`${process.env.API_PATH}/testimonials`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const testData = await testAreaData.json() 

// project
const servicefAreaData = await fetch(`${process.env.API_PATH}/my-works`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const serfData = await servicefAreaData.json() 

  
    return { props: {aboutData,serData, serfData,clientData,funData,funData2,testData }}
  }

const Index = ({aboutData,serData, serfData,clientData,funData,funData2,testData}) => {
   
    return (
        <>
            
           <SliderComponent aboutData={aboutData}/>
           <AboutUsComponent aboutData={aboutData}/>
           <ServicesComponent serData={serData} />
           <AddBlockComponent aboutData={aboutData}/>
         {/* <Furniturehome funData={funData}/> */}
          <Furniturehome2 funData2={funData2} 
          funData={funData}/>
         <Labour/> 
          <Midsection/>
        <Showroomhome/>
            <ProjectComponent serfData={serfData}/>
           <ClientComponent clientData={clientData}/>
            <Testimonial testData={testData}/>
            <Query/>
            
            
        </>
    )
}

export default Index