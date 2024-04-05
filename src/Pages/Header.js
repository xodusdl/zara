import React from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export default function Header() {

    const allMenu=[
        {index:0, name:'Shop', path:'/shop'},
        {index:1, name:'Collection', path:'/collection'},
        {index:2, name:'About', path:'/about'}
    ]

  return (
    <div className={Style.header_wrap}>
        <header className={Style.header}>
        <h1 className={Style.logo}><Link to='/'><img src="/images/logo_black.png" alt="logo"/></Link></h1>
            <nav className={Style.mainmenu}>
                <ul className={Style.mainmenu_list}>
                    {
                        allMenu.map((item)=>{
                            return(
                                <li key={uuidv4()}><Link to={item.path}>{item.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>
                <ul className={Style.info_menu}>
                    <li>LOG IN</li>
                    <li>SHOPPING BAG( 0 )</li>
                </ul>
                <ul className={Style.short_info_menu}>
                    <li><img src='./images/user.svg' alt="user"/></li>
                    <li><img src='./images/cart.svg' alt="cart"/></li>
                </ul>
        </header>
    </div>
  )
}
