import React from 'react'
import Style from './css/BannerBox.module.css'

export default function BannerBox() {
  return (
    <div className={Style.banner}>
        <div className={Style.square}>
            <p>FOR BABY<br/>COLLECTION</p>
            <button className={Style.shop_btn}>Shop Now</button>
        </div>
        <div className={Style.square}>
            <p>NEW SUMMER<br/>COLLECTION</p>
            <button className={Style.shop_btn}>Shop Now</button>
            <img src='./images/banner01.jpg' alt="banner"/>
        </div>
        <div className={Style.rectangle}>
            <p>SEASON<br/>OFF 50%</p>
            <button className={Style.shop_btn}>Shop Now</button>
            </div>
    </div>
  )
}