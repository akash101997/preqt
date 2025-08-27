import NavBar from '@/app/common/navBar/NavBar'
import PostDealcontainer from './components/PostDealContainer/PostDealcontainer'
import Footer from '../common/navBar/Footer'

import React from 'react'
import MarqueeSection from '../components/home/MarqueeSection/MarqueeCom'

const community = () => {
  return (
    
    <div>
      <NavBar />
      <MarqueeSection/>
      <PostDealcontainer/>
      <Footer/>
    </div>
  )
}

export default community