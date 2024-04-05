import React from 'react'
import Style from './css/About.module.css'

export default function About() {

  window.scrollTo(0,0)
  
  return (
    <section className={Style.about}>
        <p className={Style.title}>About</p>
        <div className={Style.page}>
        <p className={Style.about_text}>ZARA는 세계 최대 규모의 패션 그룹인 Inditex의 대표 브랜드로 전세계에서 가장 큰 패션 브랜드 중 하나입니다.<br/>
            고객은 디자인, 생산, 유통 및 판매를 모두 총괄하는 Zara의 비지니스 모델의 핵심입니다.<br/>
            더 많은 정보를 원하시면 Inditex 그룹의 홈페이지를 참고하시기 바랍니다.
        </p>
        </div>
    </section>
  )
}
