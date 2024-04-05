import React from 'react'
import Style from './css/Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={Style.footer_wrap}>
        <footer className={Style.footer}>
            <div className={Style.logo}><img src='/images/logo_black.png' alt="logo"/></div>
            <ul className={Style.info}>
                <li><span>SERVICE</span><br/>000-0000-0000<br/>
                <span>Mon - Fri</span><br/>AM 09:00 - 18:00<br/>
                <span>Sat. Sun. Red-Day Off</span></li>
                <li><span>DELIVERY</span><br/>
                Return address<br/>Seoul, Korea</li>
            </ul>
            <div className={Style.license}>License 000-00-00000</div>
            
            <ul className={Style.sns}>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
            </ul>
        </footer>
    </div>
  )
}
