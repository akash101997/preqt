import React from 'react'
import Styles from './postDealContainer.module.css'
import PostSection from '../PostSection/PostSection'

const PostDealcontainer = () => {
  return (
    <section className={Styles.postDealMainContainer}>
        <div className={Styles.postDealInnerContainer}>
            <PostSection/>
        </div>
    </section>
  )
}

export default PostDealcontainer;