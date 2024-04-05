import React from 'react'
import Style from './css/NewArrival.module.css'

export default function NewArrival() {
  return (
    <section className={Style.new}>
        <div className={Style.title}>New Arrival</div>
        <ul className={Style.new_list}>
            <li>
                <div className={Style.new_img}><img src='./images/new00.jpg' alt="new"/></div>
                <div className={Style.new_text}>
                    <p className={Style.text}>프린트 패널 원피스</p>
                    <p className={Style.text}>LIMITED EDITION</p>
                    <p className={Style.price}>₩ 99,900</p>
                </div>
            </li>
            <li>
                <div className={Style.new_img}><img src='./images/new02.jpg' alt="new"/></div>
                <div className={Style.new_text}>
                    <p className={Style.text}>자수 데님 버뮤다 팬츠</p>
                    <p className={Style.text}>LIMITED EDITION</p>
                    <p className={Style.price}>₩ 37,900</p>
                </div>
            </li>
            <li>
                <div className={Style.new_img}><img src='./images/new03.jpg' alt="new"/></div>
                <div className={Style.new_text}>
                    <p className={Style.text}>스트라이프 애니멀 백팩</p>
                    <p className={Style.text}>LIMITED EDITION</p>
                    <p className={Style.price}>₩ 69,900</p>
                </div>
            </li>
            <li>
                <div className={Style.new_img}><img src='./images/new04.jpg' alt="new"/></div>
                <div className={Style.new_text}>
                    <p className={Style.text}>자카드 니트 스웨터</p>
                    <p className={Style.text}>LIMITED EDITION</p>
                    <p className={Style.price}>₩ 75,900</p>
                </div>
            </li>
            <li>
                <div className={Style.new_img}><img src='./images/new05.jpg' alt="new"/></div>
                <div className={Style.new_text}>
                    <p className={Style.text}>플라워 프린트 원피스</p>
                    <p className={Style.text}>LIMITED EDITION</p>
                    <p className={Style.price}>₩ 69,900</p>
                </div>
            </li>
            <li>
                <div className={Style.new_img}><img src='./images/new06.jpg' alt="new"/></div>
                <div className={Style.new_text}>
                    <p className={Style.text}>니트 삭스 3켤레 세트</p>
                    <p className={Style.text}>LIMITED EDITION</p>
                    <p className={Style.price}>₩ 29,900</p>
                </div>
            </li>
        </ul>
    </section>
  )
}