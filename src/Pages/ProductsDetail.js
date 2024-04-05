import React, { useEffect, useState } from 'react'
import Style from './css/ProductsDetail.module.css'
import { Link, useParams } from 'react-router-dom'
import { getProductDetail } from '../api/firebase'
import regExp from '../Utile/regExp'

export default function ProductsDetail() {

  const { productId } = useParams('')

  const [selectedItem, setSelectedItem] = useState('')

  const [ detailImgUrl , setDetailImgUrl ] = useState('')

  useEffect(()=>{
    getProductDetail(productId).then((res)=>{
      setSelectedItem(res)
      setDetailImgUrl(res.thumImage[0])
    })
    window.scrollTo(0,0)
  }, [productId])

  // useEffect(()=>{
  //   setSelectedItem( allProducts.find(((item)=>(item.id===id))))
  // })

  // const selectedItem = getSelectedItem(allProducts, productId)

  // function getSelectedItem(products, id){
  //   return(
  //     products.find(((item)=>(item.id===id))) //객체
  //   )
  // }

  const changeDetailImg=(item)=>{
    setDetailImgUrl(item)
  }

  return (
    <>
    <section className={Style.detail}>
       <nav className={Style.breadcrumb}>
        <ul className={Style.breadcrumb_list}>
          <li><Link to='/shop'>PRODUCT</Link></li>
          <li>{selectedItem?.category}</li>
        </ul>
      </nav>
      
      <div className={Style.detail_info}>
        <div className={Style.img_list}>
          <div className={Style.main_img}><img src={detailImgUrl} alt=''/></div>
          <ul className={Style.list_img}>
          {
            selectedItem.thumImage?.map((item)=>{
              return(
              <li onClick={()=>{changeDetailImg(item)}}><img src={item} alt='목록이미지'/></li>
              )
            })
          }
          </ul>
        </div>

        <div className={Style.text_list}>
          {
          selectedItem?.isNew===true ? <div className={Style.new}>NEW</div> : ''
          }
          <p className={Style.text_category}>{selectedItem?.category}</p>
          <p className={Style.text_20}>{selectedItem?.name}</p>
          <p className={Style.text_20}>￦{regExp.comma(selectedItem?.price)}</p>
          <p className={Style.text_description}>{selectedItem?.text}</p>
          <ul className={Style.text_detail_list}>
            <li className={Style.title}>재질</li>
            <li className={Style.text}>{selectedItem?.texture}</li>
            <li className={Style.title}>사이즈</li>
            <li className={Style.text}>{selectedItem?.size}</li>
            <li className={Style.title}>제조</li>
            <li className={Style.text}>{selectedItem?.made}</li>
            <li className={Style.title}>색상</li>
            <li className={Style.text}>{selectedItem?.color}</li>
          </ul>
          <div className={Style.submit_box}>
            <input type='submit' value='장바구니' className={Style.cart}/>
            <input type='submit' value='구매하기' className={Style.buy}/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
