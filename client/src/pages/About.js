import React from 'react'
import Layout from '../components/layout/Layout.js'

const About = () => {
  return (
    <div>
        <Layout title={"About us- Ecommerce app"}>
        <div className='row contactus'>
          <div className='col-md-6'>
            <img src='/image/about.jpeg' alt='contactus' style={{width:"100%"}}/>

          </div>
          <div className='col-md-4'>
            <p className='text-justify mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni molestias eos beatae dolore. Animi corporis sit esse repellat natus suscipit porro obcaecati consequatur harum distinctio quas voluptatibus, quibusdam aperiam.
            </p>
          </div>
        </div>
        </Layout>
    </div>
  )
}

export default About