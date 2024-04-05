import React, { useState } from 'react'
import Style from './css/HomeProducts.module.css'
import useProducts from '../Hooks/useProducts'
import { Link } from 'react-router-dom'
import regExp from '../Utile/regExp'


export default function HomeProducts() {

    const allCategorys=[ 'GIRL' , 'BOY', 'ACCESSORIES', 'TOY' ]

    const [category, SetCategory] = useState ('GIRL')

    const changeCategory=(category)=>{
        SetCategory(category)
    }
    const [allProducts] = useProducts()

    let filterItems=getFilterItems(allProducts, category)

    function getFilterItems(allProducts, category){
        return (
            allProducts.filter((item)=>(item.category===category))
            )
    }

    // const [path] = usePath()


  return (
    <section className={Style.products}>
        <div className={Style.title}>Products</div>
        <ul className={Style.menu}>
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

        <ul className={Style.list}>
        {
            filterItems.map((item, index)=>( index<4 &&
            <li><Link to={`/shop/${item.id}`}><div className={Style.list_img}><img src={item.image} alt="상품이미지"/></div></Link>
                <div className={Style.list_text}>
                    <p className={Style.cate}>{item.category}</p>
                    <p className={Style.text}>{item.name}</p>
                    <p className={Style.price}>₩{regExp.comma(item.price)}</p>
                </div>
            </li>
            ))
        }
        </ul>
    </section>
  )
}
