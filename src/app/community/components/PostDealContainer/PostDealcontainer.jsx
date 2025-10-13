import React from 'react'
import Styles from './postDealContainer.module.css'
import PostSection from '../PostSection/PostSection'
import TopDeal from '../TopDealSection/TopDeal'

const PostDealcontainer = () => {
  return (
    <section className={Styles.postDealMainContainer}>
     
        <PostSection />
       
    </section>
  )
}

export default PostDealcontainer;