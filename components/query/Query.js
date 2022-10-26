import React from 'react'
import { Typography,Card } from 'antd';
import { useState } from 'react';

import { Form, Input, Button, Checkbox,message, Select } from 'antd';
import Axios from 'axios';
//import { API_PATH } from '../../Global';
const { Title ,Text} = Typography;
const { Option } = Select;
const { TextArea } = Input;
const Query = () => {
  const [form] = Form.useForm();



  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };






  const onFinish = (values) => {
    Axios.post(process.env.API_MAIL_PATH+'/send-mail.php',
            JSON.stringify({
                userName: values.Name,
                email: values.Email,
                number: values.Phone,
                msg: values.Message
            })
        )
            .then(({ data }) => {
                form.resetFields()
                if(data=='1'){
                    
                    message.success({
                        content: 'Your message Has been send successfully',
                        className: 'custom-class',
                        style: {
                          marginTop: '40vh',
                        },
                      });
                }else{
                    message.error('Your message has not been send');
                    message.success({
                        content: 'Your message has not been send',
                        className: 'custom-class',
                        style: {
                          marginTop: '40vh',
                        },
                      });
                }
                
            })

    //console.log('success:', values)
  };
  const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo)
  };

  return (
    <section className="wrapper bg-light bg1-sec76 contact">
      <div className="container py-10 py-md-8">
 
        <div className="row ">
          <div className="col-lg-12 col-12">
            {/* <h3 className="mt-0  mb-0 display-5">Contact Us</h3> */}
            <div className='kam-title  '>

                            <Title level={2} className='mb-0'><span>CONTACT  </span> US</Title>
                        
                        </div>
          </div>
        </div>
        {/* <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-centerv         col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12        "> */}
        <div className="row  align-items-center">



      



          <div className="col-lg-7 col-12 mt-10">

            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >





          <Form.Item label="I am Interested in:"
                rules={[
                  {
                  
                     required: true,
                    message: 'Please select your Option!',
                  },
                ]}
              >

              <Select
                defaultValue="Construction"
              className='weith-style'
                onChange={handleChange}
              >
                <Option value="Construction">Construction</Option>
                <Option value="Interior Design">Interior Design</Option>
                <Option value="Pipe Line">Pipe Line</Option>
                <Option value="Pre-Engineered Building">Pre-Engineered Building</Option>
          
                <Option value="Furniture">Furniture</Option>
              </Select>

              </Form.Item>







              <Form.Item
                label="Name"
                placeholder="name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                ]}
              >

                <Input />
              </Form.Item>




              <Form.Item
                label="Email"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email-id!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Phone NO.!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="Message"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Message!',
                  },
                ]}
              >
                <TextArea showCount maxLength={350} autoSize={{ minRows: 3, maxRows: 6 }} />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button type="primary colororange2" htmlType="submit"  >

                  Submit

                </Button>


              </Form.Item>
            </Form>
          </div>

          <div className="col-lg-4  mt-n1">

            
            <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Address</h5>
               <p className="blackcoloro"> <a href="https://goo.gl/maps/MVSjKtnd6vznPQrY9">
               108 Udyamnagar,Majgaon, Sawantwadi ,Pin-416510 </a> </p>
              </div>

            </div>


            <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-phone colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">Phone</h5>
                <p className=" d-md-block blackcoloro  mb-0 mt-n1" ><a href="tel:+919422946262">+91-9422946262</a></p>
                <p className=" d-md-block blackcoloro  mb-4 mt-n1" ><a href="tel:+919373807744">+91-9373807744</a></p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div > <i className="fa fa-envelope-o colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">E-mail</h5>
                <p className="mb-1 blackcoloro"><a href="mailto:raja_bokade@rediffmail.com" className="link-body">raja_bokade@rediffmail.com</a></p>
                <p className="mb-1 blackcoloro"><a href="mailto:srsteelindustries@rediffmail.com" className="link-body">srsteelindustries@rediffmail.com</a></p>
               
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};


export default Query