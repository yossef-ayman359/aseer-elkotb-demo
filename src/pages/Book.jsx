import { useLocation, useNavigate } from 'react-router-dom';

import { topSellingBooks as topSale, fantasyBooks as fantasy } from '../data/Book1.js'
import style from '../assets/style/BookPage.module.css'
import Navbar from '../componants/navbar.jsx'
import Footer from '../componants/footer.jsx'
import { useUserData } from '../componants/userDataProvider.jsx';
import { MdOutlineFavoriteBorder, MdOutlineFavorite  } from "react-icons/md";


function BookPage()
{
    const location = useLocation();
    const { currentUser, updateUserProfile } = useUserData();
    const navigate = useNavigate();
    
    const book = location.state?.book;

    if (!book) {
        return <div>لم يتم العثور على تفاصيل الكتاب.</div>;
    }

    const addToCart = (book) => {
        if (!currentUser) {
            navigate('/Login')
            alert("يرجى تسجيل الدخول إضافة كتب للسلة");
            return;
        }

        if (!book.inStock)
        {
            alert("الكتاب غير متوفر الأن")
            return;
        }

        const currentCart = currentUser.cart || [];

        const isExist = currentCart.find(item => item.id === book.id)

        let updatedCart;
        if (isExist) {
            updatedCart = currentCart.map(item => 
                item.id === book.id 
                    ? { ...item, count: (item.count) + 1 } 
                    : item
            );
        } else {
            updatedCart = [...currentCart, { ...book, count: 1 }];
        }


        updateUserProfile({ cart: updatedCart });
    }

        const isFavExist = (book) => {
        return currentUser?.favList.some(item => item.id === book.id)
    }

    let addToFav = (book) => {
        if (!currentUser) {
            navigate('/Login')
            alert("يرجى تسجيل الدخول لإضافة كتب للمفضلة");
            return;
        }

        const currentFav = currentUser.favList || [];

        const isExist = currentFav.find(item => item.id === book.id);

        let updatedFav;
        if (isExist) {
            updatedFav = currentFav.filter(item => 
                item.id !== book.id
            )
        } else {
            updatedFav = [...currentFav, book]
        }

        updateUserProfile({ favList: updatedFav })
    }

    let bookDataPrice;
    if (book.inStock) {
        bookDataPrice = <>
                    <div className={style["Book-price-div"]}>
                        <p className={`${style["col1"]}`}>قبل</p>
                        <p className={`${style["col2"]} ${style["old-price"]}`}>{book.originalPrice} ج.م</p>

                        <p className={`${style["col1"]}`}>بعد</p>
                        <p className={`${style["col2"]}`}>{book.price} ج.م</p>

                        <p className={`${style["col1"]} ${style["discount"]}`}>خصم</p>
                        <p className={`${style["col2"]}`}>{book.discount.replace('-','')}</p>

                        <p className={`${style["col1"]}`}>هتوفر</p>
                        <p className={`${style["col2"]}`}>{ book.originalPrice - book.price } ج.م</p>
                    </div>
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
                </>
    }
    else {
        bookDataPrice =
            <>
                <span className={style["not-avalible"]}> 😔غير متوفر</span>
            </>
    }
    return (
        <>
            <Navbar />
            <div className={ style["body-book-page"]}>
                <aside className={ style["right-section"]}>
                    <div className={ style["img-div"]}>
                        <img src={book.coverImage} alt={book.title} className={style["Img"]} />
                        <button onClick={() => addToFav(book)} className={`${style["fav"]}`}>
                            {isFavExist(book) ? 
                                <MdOutlineFavorite size={30} fill='white'/>
                                :
                                <MdOutlineFavoriteBorder size={30} fill='white' />
                            }
                        </button>
                    </div>
                    <h2 className={style["Book-title"]}>{book.title}</h2>
                    {bookDataPrice}
                </aside>

                <article className={style["Book-info"]}>
                    <h3 className={style["hint"]}>نبذة عن [ {book.title} ]</h3>
                    <p className={style["description"]}>{book.description}</p>
                    
                    <h3 className={style["hint"]}>نبذة عن  ({ book.author}) </h3>
                    <p className={style["description"]}>{book.authorBio}</p>
                </article>
            </div>

            <Footer />
        </>
    )
}

export default BookPage