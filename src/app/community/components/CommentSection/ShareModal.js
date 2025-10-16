
"use client"
import React from 'react'
import Styles from './shareModal.module.css'

export default function ShareModal({ isOpen, onClose, shareUrl, onCopy }) {
  if (!isOpen) return null
  return (
    <div className={Styles.modalOverlay} onClick={onClose}>
      <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={Styles.modalHeader}>
          <p className={Styles.modalTitle}>Share</p>
          <button className={Styles.closeBtn} onClick={onClose}>×</button>
        </div>
        <div className={Styles.modalBody}>
          <input className={Styles.input} value={shareUrl} readOnly />
          <button className={Styles.copyBtn} onClick={onCopy}>Copy</button>
        </div>
      </div>
    </div>
  )
}