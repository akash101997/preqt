import styles from './page.module.css';

import React from 'react'
import TransactionsTable from './TransationTable';

export default function page() {
  return (

    <div className={styles.TransactionsTable}><TransactionsTable/></div>
  )
}
