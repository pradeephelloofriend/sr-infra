import React from 'react'
import {useRouter} from 'next/router'

import WorksComp from '../../../components/works/WorksComp'
import BreadWorks from '../../../components/works/BreadWorks'
export async function getServerSideProps() {
  const workAreaData = await fetch(`${process.env.API_PATH}/my-works/?per_page=100`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
const workData = await workAreaData.json() 


const serviceAreaData = await fetch(`${process.env.API_PATH}/work_category`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const serData = await serviceAreaData.json() 





return { props: {workData ,serData }}
}

const index = ({workData,serData}) => {
  const router=useRouter()
 
 
  // console.log('routerrrrrrrrrrrrrrrrr',router.query)
 
 
 const {desc}=router.query
 
  


 
    return (
        <>
    
      
      
         <BreadWorks serData={serData} />
         <WorksComp workData={workData}  
         serData={serData}
         code={desc}
         />
         
         
        </>
    )
}

export default index



// import React from 'react'
// import {useRouter} from 'next/router'

// import WorksComp from '../../../components/works/WorksComp'
// import BreadWorks from '../../../components/works/BreadWorks'
// export async function getServerSideProps() {
//   const workAreaData = await fetch(`${process.env.API_PATH}/my-works/?per_page=100`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.JWT_TOKEN}` 
//     }
//   })
// const workData = await workAreaData.json() 


// const serviceAreaData = await fetch(`${process.env.API_PATH}/work_category`,{
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${process.env.JWT_TOKEN}` 
//   }
// })
// const serData = await serviceAreaData.json() 





// return { props: {workData ,serData }}
// }

// const index = ({workData,serData}) => {
//   const router=useRouter()
 
 
//   console.log('router',router.query.desc)


 
//     return (
//         <>
    
      
        
       
//          <BreadWorks desc={router.query.desc} />
//          <WorksComp workData={workData}  
//          serData={serData}
//          />
         
         
//         </>
//     )
// }

// export default index