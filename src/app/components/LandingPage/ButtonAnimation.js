import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./animatedBtn.module.css"

const ButtonAnimation = ({ text = "" }) => {
    return (
        <div className={styles.circularAnimation}>
            {text}
        </div>
    )
}

export default ButtonAnimation
