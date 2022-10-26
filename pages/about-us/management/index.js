import React from 'react'
import {useRouter} from 'next/router'

import Management from '../../../components/management/Management'
import Breadmanagement from '../../../components/management/Breadmanagement'
import OurStoryComponent from '../../../components/management/OurStoryComponent'
export async function getServerSideProps() {



const manAreaData = await fetch(`${process.env.API_PATH}/pages/1326`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const manData = await manAreaData.json() 

return { props: {manData  }}
}

const index = ({manData}) => {
  const router=useRouter()
 

  const {id }= router.query
 
  //console.log('router',router.query.desc)
 
 
    return (
        <>
       <Breadmanagement  />
         {/* <Management manData={manData}
    //  code={id}
         /> */}
         <OurStoryComponent manData={manData}/>
             
        </>
    )
}

export default index

