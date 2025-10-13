import React from 'react'
import MarqueeCom from '../components/home/MarqueeSection/MarqueeCom'
import Styles from './components/PostDealContainer/postDealContainer.module.css'
import TopDeal from './components/TopDealSection/TopDeal'

const layout = ({ children }) => {
  return (
    <div style={{marginTop: '110px'}}>
      <MarqueeCom />
      {/* <section className={Styles.postDealMainContainer}> */}
      <div className={Styles.postDealInnerContainer}>
        {children}
        <div className={`${Styles.TopDealContainer} ${Styles.topDealPadding}`}>
          <TopDeal />
        </div>
      </div>
    {/* </section> */}
      
    </div>
  )
}

export default layout
