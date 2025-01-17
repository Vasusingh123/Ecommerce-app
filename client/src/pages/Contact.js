import React from 'react'
import Layout from '../components/layout/Layout.js'
import {BiMailSend, BiPhoneCall, BiSupport} from "react-icons/bi";
const Contact = () => {
  return (
    <div>
        <Layout>
        <div className='row contactus'>
          <div className='col-md-6'>
            <img src="/image/contactus.jpeg" alt='contactus' style={{width:"100%"}}/>
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text -center'>CONTACT US</h1>
            <p className='text-justify mt-2'>
              any query and info about product feel free to call anytime we 24x7 vaialible  
            </p>
            <p className='mt-3'>
              <BiMailSend/> : www.help@ecommerceapp.commerce
            </p>
            <p className='mt-3'>
              <BiPhoneCall/> : 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
        </Layout>
    </div>
  )
}

export default Contact