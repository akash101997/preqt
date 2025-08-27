import React from 'react'
import styles from './page.module.css'
import Details_Com from './details/Detalis_Com'
import Sidenav from './Sidenav'

export default function page() {
  return (
   <div>
    <Sidenav/>
     {/* <div className={styles.details_Com}><Details_Com/></div> */}
   </div>
  )
}
