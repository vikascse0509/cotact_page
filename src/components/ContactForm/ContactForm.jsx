import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState("vikas")
  const [email, setEmail] = useState("vikas@gmail.com")
  const [message, setMessage] = useState("hii how are you?")

  
  const onSubmit = (event)=>{
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setMessage(event.target[2].value)
    
  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT"icon={<MdMessage fontSize="24px" />}/>
          <Button  text="VIA CALL"icon={<FaPhoneAlt fontSize="24px" />}/>
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM"icon={<HiMail fontSize="24px" />}/>
          <form action="" onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name='text' rows="6"  />
            </div>
            <div style={{display:"flex",justifyContent:"end"}}>
            <Button text="SUBMIT"/>
            </div>
            <div>
              {name + " " + email + " " + message}
            </div>
          </form>
          </div>
        <div className={styles.contact_image}>
          <img src="./src/images/7service.png" alt="24/7 SERVICE" />
        </div>
    </section>
  )
}

export default ContactForm