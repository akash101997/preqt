import React from 'react'
import Styles from './postDealContainer.module.css'
import PostSection from '../PostSection/PostSection'
import TopDeal from '../TopDealSection/TopDeal'

const PostDealcontainer = () => {
  return (
    <section className={Styles.postDealMainContainer}>
      <div className={Styles.postDealInnerContainer}>
        <PostSection />
        {/* <div className={Styles.TopDealContainer}>
          <TopDeal />
        </div> */}
      </div>
    </section>
  )
}

export default PostDealcontainer;