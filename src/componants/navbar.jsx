import style from '../assets/style/navbar.module.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Icons */
import { FaRegUserCircle } from "react-icons/fa";   // if user not register
import { FaUserCircle } from "react-icons/fa";      // if user register
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useUserData } from './userDataProvider';
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { LiaStoreAltSolid } from "react-icons/lia";
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
}) {
    const { currentUser, logout } = useUserData()
    const THEME = 'light';

    // const isSigned = false
    const userCartLength = currentUser?.cart?.length || 0   
    const userFavLength = currentUser?.favList?.length || 0   

    return (
        <>
            <header className={`${style["navbar"]} ${style[THEME]}`}>
                <div className={ style["logo"] }>
                    <a href="/">
                        <img src="https://cdn.aseeralkotb.com/images/logo.svg" alt="logo" className={ style["logo"] } />
                    </a>
                </div>

                <div className={style["icons"]}>
                        {
                            isHome ?
                            ''
                            :
                            <Link to='/' className='Home'>
                                <MdHome className={ style["ico"]} />
                            </Link>
                        }
                        {
                            isStore ? 
                                null
                                :
                                <Link to='/Store'>
                                    <LiaStoreAltSolid className={ style["ico"]}/>
                                </Link>
                        }
                    {/* {!isHome    && <a href="/"></a>} */}
                    <Link to="/Cart" className={style["link-ico"]}>
                        <MdOutlineShoppingCart className={style["ico"]} />
                        {userCartLength ? 
                            <span className={style["counter"]}>
                                {userCartLength}
                            </span>
                            :
                            ''
                        }
                    </Link>
                    <Link to="/Favorite" className={style["link-ico"]}>
                        <MdOutlineFavoriteBorder className={style["ico"]} />
                        {userFavLength ? 
                            <span className={style["counter"]}>
                                {userFavLength}
                            </span>
                            :
                            ''
                        }
                    </Link>
                    <button onClick={goToFooter} className={style["logout-btn"]}>
                        <RiCustomerService2Line className={style["ico"]}/>
                    </button>
                    {currentUser ?
                        <>
                            {/* if user register */}
                            <button onClick={logout} className={style["logout-btn"]}>
                                <MdLogout className={style["ico"]}/>
                            </button>
                        </>
                        :
                        <>
                            {/*  if user not register */}
                            <Link to="/Login">
                                <MdLogin className={style["ico"]}/>
                            </Link>
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Navbar