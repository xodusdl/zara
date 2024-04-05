import React from 'react'
import Style from './css/Collection.module.css'
import { Link } from 'react-router-dom'

export default function Collection() {
  return (
    <section className={Style.collection}>
        <div className={Style.title}>Collection</div>
        <div className={Style.collection_box}>
          <Link to='/collection'>
            <div className={Style.box_img}>
              <img src='./images/collection00.jpg' alt="collection"/>
              <div className={Style.hover_img}>view more</div>
            </div>
            </Link>
            <ul className={Style.product_list}>
                <li>
                  <img src='./images/girl00_0.jpg' alt="girl"/>
                  <div className={Style.hover_box}><p>자수 프린트 원피스</p><p>₩99,900</p></div>
                </li>
                <li>
                  <img src='./images/acc01_0.jpg' alt="acc"/>
                  <div className={Style.hover_box}><p>플라워 프린트 모자</p><p>₩29,900</p></div>
                </li>
                <li>
                  <img src='./images/acc03_0.jpg' alt="acc"/>
                  <div className={Style.hover_box}><p>브라운 가죽 샌들</p><p>₩29,900</p></div>
                </li>
                <li>JOJO WEARS THE COTTON YELLOW DRESS WITH EMBROIDERY ON SLEEVES AND YELLOW SUN HAT.</li>
            </ul>
            <button className={Style.left_btn}></button>
            <button className={Style.right_btn}></button>
        </div>
    </section>
  )
}