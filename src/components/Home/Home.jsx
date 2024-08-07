import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Banner from './Banner'

import Footer from './Footer'
import Navbar from './Navbar'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div  className='w-full flex flex-col'>
 <Navbar/>
    <Banner />
   <Footer/>
    </div>
  )
}

export default Home