import {Link, useNavigate} from 'react-router-dom'

import Navbar from '../componants/navbar.jsx'
import Footer from '../componants/footer.jsx'
import style from '../assets/style/Store.module.css'
import { topSellingBooks as topSale, fantasyBooks as fantasy}  from '../data/Book1.js'
import BookPage from './Book.jsx'
import { useUserData } from '../componants/userDataProvider.jsx'

const goToBookPage = (book) => {
    <Book book></Book>
}

function Store() {
    const navigate = useNavigate()

    const { currentUser, updateUserProfile } = useUserData()

    let addToCart = (book) => {
        if (!currentUser) {
            navigate('/Login')
            alert("يرجى تسجيل الدخول إضافة كتب للسلة");
            return;
        }

        const currentCart = currentUser.cart || [];

        const updatedCart = [...currentCart, book];

        updateUserProfile({ cart: updatedCart });
    }

    return (
        <>
            <Navbar isStore={true}></Navbar>

            <p className={ style["section-name"]}>الكتب الأكثر مبيعًا 🏆</p>
            <section className={ style["top-sale"]}>
                {topSale.sort((a, b) => b.id - a.id)
                        .map((book) => (
                            <div key={book.id} className={style["card"]}>
                                <Link to="/Book" state={{book}}>
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className={style["Img"]} />
                                    <span className={style["rank"]}>{ book.topRank}</span>
                                </Link>
                                <div className={style["infos"]}>
                                    <div className={style["book-name"]}>
                                        <h2>{ book.title}</h2>
                                    </div>
                                    <div className={style["book-author"]}>
                                        <p>{book.author}</p>
                                    </div>
                                    {
                                        book.price ? (
                                        <>
                                            <div className={style["price-container"]}>
                                                <span className={style["old-price"]}>{book.originalPrice} ج.م</span>
                                                <span className={style["new-price"]}>{book.price} ج.م</span>
                                            </div>
                                        </>
                                        ) : (
                                            <span className={style["not-avalible"]}>غير متوفر</span>
                                        )
                                    }
                                    <button onClick={ () => {addToCart(book)} } className={style["btn"]}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            width="24px"
                                            viewBox="0 -960 960 960"
                                            fill="white">
                                            <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                                        </svg>
                                    </button>
                                </div>
                        </div>
                    ))}
            </section>

            <hr />

            <p className={ style["section-name"]}>عوالم الفانتازيا 👻</p>
            <section className={ style["top-sale"]}>
                {fantasy.sort((a, b) => b.id - a.id)
                        .map((book) => (
                        <div key={book.id} className={style["card"]}>
                            <Link to="/Book" state={{book}}>
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    className={style["Img"]} />
                                <span className={`${style["rank"]} ${style["discount"]}`}>{ book.discount}</span>
                            </Link>
                            <div className={style["infos"]}>
                                <div className={style["book-name"]}>
                                    <h2>{ book.title}</h2>
                                </div>
                                <div className={style["book-author"]}>
                                    <p>{book.author}</p>
                                </div>
                                    {
                                        book.price ? (
                                        <>
                                            <div className={style["price-container"]}>
                                                <span className={style["old-price"]}>{book.originalPrice} ج.م</span>
                                                <span className={style["new-price"]}>{book.price} ج.م</span>
                                            </div>
                                        </>
                                        ) : (
                                            <span className={style["not-avalible"]}>غير متوفر</span>
                                        )
                                    }
                                    <button onClick={ () => {addToCart(book)} } className={style["btn"]}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            width="24px"
                                            viewBox="0 -960 960 960"
                                            fill="white">
                                            <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                                        </svg>
                                    </button>
                                </div>
                        </div>
                    ))}
            </section>

            <Footer></Footer>
        </>
    )
}

export default Store


{/* <div className={ style["sec1"]}>
                <div className={style["card"]}>
                    <img src="photos/download.jpg" alt="" className={ style["Img"]} />
                    <h2>B1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore, dolores ut ipsa vitae quae. Repellat nobis doloribus necessitatibus sit.</p>
                    <button className={style["btn"]}>Visit Now</button>
                </div>
            </div> */}