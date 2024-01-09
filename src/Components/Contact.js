import React from 'react'
import './contact.css'
import mail from '../../src/mail.jpeg';
import phone from '../../src/phone.jpeg';

const Contact = () => {
  return (
    <section id='Contact' className='sec'>
        <div>
            <span className='span'>Contact</span><br/>
            <div>
                <img className='mimg' src={mail} alt="mail" height='50px' width ='50px'/>
            
            <br/><span>reshmachowdarybandla@gmail.com</span><br/>
                <img className='mimg'src = {phone} alt='phone' height = '40px' width='30px'/>
            <br/><span>6301474637</span>
            </div>
        </div>
    </section>
  )
}

export default Contact
