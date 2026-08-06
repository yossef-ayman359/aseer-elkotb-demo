import style from '../assets/style/navbar.module.css'
import { useEffect } from 'react';

let goToFooter = (e) => {    
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
    }
}

function Navbar({ isHome = false})
{
    const THEME = 'light';

    return (
        <>
            <header className={`${style["navbar"]} ${style[THEME]}`}>
                <div className={ style["logo"] }>
                    <a href="#">
                        <img src="https://cdn.aseeralkotb.com/images/logo.svg" alt="" className={ style["logo"] } />
                    </a>
                </div>
                
                <nav className={style["links"]}>
                    {!isHome && <a href="#">Home</a>}
                    <a href="#">Shop</a>
                    <a href="#">E-Books</a>
                    <a href="#">Pages</a>
                    <a href="#">Blog</a>
                    <a href="#" onClick={goToFooter}>Contact</a>
                </nav>

                <div className={style["icons"]}>
                    <a href="#" className='cart'>
                        <svg
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#e3e3e3" >
                            <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                        </svg>
                    </a>
                    <a href="#" className='favorite'>
                        <svg
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                            // fill="#e3e3e3"
                        >
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                        </svg>
                    </a>
                    <a href="#" className="person">
                        <svg
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#e3e3e3" >
                            <path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" />
                        </svg>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Navbar