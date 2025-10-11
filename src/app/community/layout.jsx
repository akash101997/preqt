import React from 'react'
import MarqueeCom from '../components/home/MarqueeSection/MarqueeCom'
import Styles from './components/PostDealContainer/postDealContainer.module.css'
import TopDeal from './components/TopDealSection/TopDeal'

const layout = ({ children }) => {
  return (
    <div>
      <MarqueeCom />
      <section className={Styles.postDealMainContainer}>
      <div className={Styles.postDealInnerContainer}>
        {children}
        <div className={Styles.TopDealContainer}>
          <TopDeal />
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default layout
