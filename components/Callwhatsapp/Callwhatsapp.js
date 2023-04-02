import React from 'react'
import {FaWhatsapp, FaPhoneSquareAlt} from "react-icons/fa"
import styles from "./Callwhatsapp.module.css"
import Link from 'next/link'

function Callwhatsapp() {
  return (
    <section className={styles.buttons}>
        <div><a href="https://api.whatsapp.com/send?phone=918951718061&text=Hello," target="_blank" rel="noreferrer"><FaWhatsapp className={styles.whatsapp}/></a></div>
        <div><a href="tel:918951718061" rel="noreferrer"><FaPhoneSquareAlt className={styles.call}/></a></div>
    </section>
  )
}

export default Callwhatsapp