import React from 'react'
import Visual from '../Components/Visual'
import Collection from '../Components/Collection'
import NewArrival from '../Components/NewArrival'
import BannerBox from '../Components/BannerBox'
import HomeProducts from '../Components/HomeProducts'
import BannerImg from '../Components/BannerImg'

export default function Home() {

  window.scrollTo(0,0)
  
  return (
    <>
    <Visual/>
    <Collection/>
    <HomeProducts/>
    <BannerBox/>
    <NewArrival/>
    <BannerImg/>
    </>

  )
}
