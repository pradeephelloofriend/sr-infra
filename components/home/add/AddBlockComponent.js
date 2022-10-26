import React from 'react'
import { Card,Typography,Progress } from 'antd';
const{Text,Title}=Typography
const AddBlockComponent = ({aboutData}) => {
    //console.log('aboutData',aboutData)
    return (
        <section className="wrapper image-wrapper   text-white addblock-area">
            <div className="container py-14 py-md-16">
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='left-info-block'>
                            <Card hoverable className='bg-black'>
                                <div className="abt-block-right mb-3">
                                {aboutData.acf.add_block.left_content.option.map((s, index) =>
                                    <div key={index} className="ab-detail">
                                        <h5 className="ant-typography text-white"> {s.name}</h5>
                                        
                                    </div>
                                )}
                                    
                                </div>
                                <Card bordered={false} className='bg-theme'>
                                    <div className=' text-whiteh3' dangerouslySetInnerHTML={{ __html: aboutData.acf.add_block.left_content.information}} />
                                    {/* <Title level={4}><span style={{fontWeight:300}}></span> {}   
                                    </Title> */}
                                </Card>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-5'>
                    
               <div  className='our-exp-block'>
                            <Title level={2} className='mb-5'><span style={{fontWeight:100}}>We have</span> 24+ years Experience in <span className='text-theme-color' style={{fontWeight:400}}>S.R. INDUSTRIES </span></Title>
                            {aboutData.acf.add_block.right_content.progress_bar.map((s, index) =>
                            <div key={index} className='prog-bar'>
                                <Text>{s.title} </Text>
                                <Progress percent={s.percentage} />
                                
                            </div>
                               )}
                        </div>
                 
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default AddBlockComponent
