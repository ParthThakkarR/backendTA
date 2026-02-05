import React from 'react'
import './page.css';                
import styles from './page.module.css'; 
function page() {
  return (
     <div className={styles.card}>
      <h1 className={styles.title}>about</h1>

      <table >
        <thead>
          <tr>
            <th>Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#123</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
      <table>

      </table>
    </div>
  )
}

export default page
