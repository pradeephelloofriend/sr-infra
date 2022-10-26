import React from 'react'
import { useState } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import Axios from 'axios';
//import { API_PATH } from '../../Global';


const { TextArea } = Input;
const ContactComponent = () => {
  const [form] = Form.useForm();

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
    <section className="wrapper  bg-light contact">
      <div className="container py-10 py-md-8 ">

        <div className="row ">
          <div className="col-lg-12 col-12">
            <h3 className="mt-0  mb-6 display-5">Contact Us</h3>
          </div>
        </div>
        <div className="row col-lg-3 col-md-6 col-12 pt-md-2 pt-sm-4 pt-lg-0 pt-2 align-items-center">
          <div className="col-lg-7 col-md-12 mt-10">

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

          <div className="col-lg-4 mt-md-n0 mt-15 mt-sm-n5">
         {/* mt-n15 */}
          
            <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-map colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0 ">Address</h5>
               
               <p className="blackcoloro"> <a href="https://goo.gl/maps/66JLR2NCPfroteHM6"> 1,2,3,5 & 6 Bonita Apts, Opp. Expert Pharmacy, St. Inez,
Panjim - Goa 403001
</a> </p>
              </div>

            </div>
            <div className="d-flex flex-row">
              <div>
                <div> <i className="fa fa-phone colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">Phone</h5>
                <p className=" d-md-block blackcoloro  mb-0 mt-n1" ><a href="tel:+919822388180">+91-9822388180</a></p>
                <p className=" d-md-block blackcoloro  mb-4 mt-n1" ><a href="tel:+919881140636">+91-9881140636</a></p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div > <i className="fa fa-envelope-o colororange fs-28 me-4 mt-n1" aria-hidden="true"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">E-mail</h5>
                <p className="mb-1 blackcoloro"><a href="mailto:info@supernovagoa.com" className="link-body">info@supernovagoa.com</a></p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactComponent