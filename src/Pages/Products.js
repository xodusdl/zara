import React, { useState } from 'react'
import Style from './css/Products.module.css'
import { Link } from 'react-router-dom'
import useProducts from '../Hooks/useProducts'
import regExp from '../Utile/regExp'

export default function Products() {

  const allCategorys = ['ALL', 'GIRL', 'BOY', 'ACCESSORIES', 'TOY']

  const [category, SetCategory] = useState('ALL')

  const changeCategory=(category)=>{
    SetCategory(category)
  }

  const [ allProducts ] = useProducts()

  const filterItems=getFilterItems(allProducts, category)

  function getFilterItems(allProducts, category){
    if(category==='ALL'){
        return (allProducts)
    }else{
        return (
          allProducts.filter((item)=>(item.category===category))
        )
    }
  }

  window.scrollTo(0,0)
  
  return (
    <section className={Style.products}>
      <p className={Style.title}>Products</p>
      <ul className={Style.category}>
        {
          allCategorys.map((item)=>{
            return(
              <li className={`${item===category && Style.selected}`} onClick={()=>{
                changeCategory(item)
              }}>{item}</li>
            )
          })
        }
      </ul>
      <ul className={Style.products_list}>
        {
          filterItems.map((item)=>{
            return(
              <li>
              <Link to={`/shop/${item.id}`}>
              <div className={Style.img}><img src={item.image} alt=""/></div>
              </Link>
              {
                item.isNew===true ? <div className={Style.new}>NEW</div> : ''
              }
              <div className={Style.info}>
                <p className={Style.text}>{item.name}</p>
                <p className={Style.text}>₩{regExp.comma(item.price)}</p>
              </div>
              </li>
            )

          })
        }


        {/* <li>
          <div className={Style.img}><img src='./images/girl00_0.jpg' alt=""/></div>
          <div className={Style.collaboration}>COLLABORATION</div>
          <div className={Style.new}>NEW</div>
          <div className={Style.info}>
            <p className={Style.text}>스트라이프 원피스</p>
            <p className={Style.text}>₩89900</p>
          </div>
        </li> */}

      </ul>
    </section>
  )
}
