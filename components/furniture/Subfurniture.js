import { Card, Typography, Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image'
import c1 from '../../public/img/about/me.jpg'
import ParentCategory from './ParentCategory';
const Subfurniture = ({ workData, funData2, name }) => {
    const router = useRouter()
    //console.log('catData',workData)
    const [data, setData] = useState([])
    const [subCatData,setSubCatData]=React.useState(null)
    
    /*useEffect(() => {
        const subData=[]
        workData.forEach(ele => {
            subData.push({id:ele.acf.sub_category.term_id,name:ele.acf.sub_category.name})
               
        });
        const output = [...new Map(subData.map(o => [o.id, o])).values()]
        
        /*const groupByCategory = workData.reduce((group, product) => {
            const { name } = product.acf.sub_category;
            group[name] = group[name] ?? [];
            group[name].push(product);
            return group;
          }, {});
          console.log('groupByCategory',groupByCategory)
        setSubCatData(output)
        setData(workData.filter(d => d.acf.category.name == name))



    }, [name,workData]);*/


    //console.log('Subfurniture data', data)
    //console.log('subCatData',subCatData)
    return (
        <>{workData!==null?workData.map((x,idx)=>
            <ParentCategory
            key={idx}
            data={x}
            code={x.id}
            title={x.title.rendered}
        />
    ):<></>}
            

            

        </>
    );
}

export default Subfurniture;