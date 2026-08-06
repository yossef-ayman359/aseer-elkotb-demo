import style from '../assets/style/navbar.module.css'
import { useEffect } from 'react';

/* Icons */
import { FaRegUserCircle } from "react-icons/fa";   // if user not register
import { FaUserCircle } from "react-icons/fa";      // if user register
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
/*  */

let goToFooter = (e) => {    
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
    }
}

function Navbar({
    isHome      = false,
    isStore     = false,
    isEBook     = false,
    isPages     = false,
    isBlog      = false
})
{
    const THEME = 'light';

    return (
        <>
            <header className={`${style["navbar"]} ${style[THEME]}`}>
                <div className={ style["logo"] }>
                    <a href="/">
                        <img src="https://cdn.aseeralkotb.com/images/logo.svg" alt="logo" className={ style["logo"] } />
                    </a>
                </div>
                
                <nav className={style["links"]}>
                    {!isHome    && <a href="/">الرئيسية</a>}
                    {!isStore   && <a href="/Store">المتجر</a>}
                    {!isPages   && <a href="#">الصفحات</a>}
                    {!isEBook   && <a href="#">الكتب الالكترونية</a>}
                    {!isBlog    && <a href="#">المدونة</a>}
                    <button type='button' onClick={goToFooter}>تواصل معنا</button>
                </nav>

                <div className={style["icons"]}>
                    <a href="#" className='cart'>
                        <MdOutlineShoppingCart className={ style["ico"]} />
                    </a>
                    <a href="#" className='favorite'>
                        <MdOutlineFavoriteBorder className={ style["ico"]} />
                    </a>
                    <a href="#" className="person">
                        <FaRegUserCircle className={ style["ico"]} />
                    </a>
                </div>
            </header>
        </>
    )
}

export default Navbar