import Image from 'next/image'
import React from 'react'
import styles from "./commingsoon.module.css"

const Loader = () => {
    return (
        <div className={styles.loaderSection}>
            <Image src="/assets/pictures/coin-loader.gif" height={150} width={150} />
        </div>
    )
}

export default Loader
