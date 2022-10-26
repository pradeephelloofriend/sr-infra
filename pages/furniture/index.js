import React from 'react'
import {useRouter} from 'next/router'

import Furniture from '../../components/furniture/Furniture'
import Breadfun from '../../components/furniture/Breadfun'
export async function getServerSideProps() {
  const workAreaData = await fetch(`${process.env.API_PATH}/furnitures/?per_page=100`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
const workData = await workAreaData.json() 




const serAreaData = await fetch(`${process.env.API_PATH}/furniture_category/?per_page=100`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const serData = await serAreaData.json() 

// furniture2
const fun2AreaData = await fetch(`${process.env.API_PATH}/furniture_category`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const funData2 = await fun2AreaData.json() 
 



return { props: {workData,serData,funData2  }}
}

const index = ({workData,serData,funData2}) => {
  const router=useRouter()
 

  const {id }= router.query
 
  //console.log('router',serData)
 
 
    return (
        <>
    
      <Breadfun/>
         <Furniture workData={workData} 
         funData2={funData2}
         serData={serData}
         code={id}
         />
       
        </>
    )
}

export default index

