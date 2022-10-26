import React from 'react'
import {useRouter} from 'next/router'

import Subworkproject from '../../components/works/Subworkproject'

export async function getServerSideProps() {
  const workAreaData = await fetch(`${process.env.API_PATH}/my-works/?per_page=100`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
const workData = await workAreaData.json() 




return { props: {workData  }}
}

const index = ({workData}) => {
  const router=useRouter()
 

  const {id }= router.query
 
  //console.log('router',router.query.desc)
 
 
    return (
        <>
    
      
         <Subworkproject workData={workData}  code={id}
         />
         
        </>
    )
}

export default index

