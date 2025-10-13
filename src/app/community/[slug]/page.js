'use client'
import React from 'react'
import Styles from './page.module.css'
import PostSection from '../components/PostSection/PostSection'
import { useParams } from 'next/navigation'
import TopDeal from '../components/TopDealSection/TopDeal'
import MarqueeCom from '../../components/home/MarqueeSection/MarqueeCom'
import PostDealcontainer from '../components/PostDealContainer/PostDealcontainer'
import PostDetails from '../components/PostDetails'
const page = () => {
  const { slug } = useParams()
  return (
    <>
    
    
      <div className={Styles.postDealMainContainer}>
        <PostDetails slug={slug} />
        
      </div>
  
     
    </>
  )
}

export default page
