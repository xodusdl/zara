import React from 'react'
import Style from './css/Collection.module.css'

export default function Collection() {

  window.scrollTo(0,0)
  
  return (
    <section className={Style.collection}>
        <p className={Style.title}>Collection</p>
        <div className={Style.page}>페이지 준비중입니다</div>
    </section>
  )
}
