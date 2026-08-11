import style from '../assets/style/Card.module.css'
import { Link } from 'react-router-dom';
import { useUserData } from './userDataProvider';

function Card({book}) {
    const { currentUser, updateUserProfile } = useUserData()
    
    let addToCart = (book) => {
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

    return (
        <>
            <div key={book.id} className={style["card"]}>
                <Link to="/Book" state={{book}}>
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className={style["Img"]} />
                    {
                        book.topRank != null ? 
                        <span className={`${style["rank"]}`}>{ book.topRank}</span>
                        :
                        <span className={`${style["rank"]}`}>{ book.discount}</span>
                    }
                </Link>
                <div className={style["infos"]}>
                    <div className={style["book-name"]}>
                        <h2>{ book.title}</h2>
                    </div>
                    <div className={style["book-author"]}>
                        <p>{book.author}</p>
                    </div>
                    <div className={style["price-button-card-footer"]}>
                        {
                            book.price ? (
                            <>
                                <div className={style["price-container"]}>
                                    <span className={style["new-price"]}>{book.price} ج.م</span>
                                    <span className={style["old-price"]}>{book.originalPrice} ج.م</span>
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
                            ) : (
                                <span className={style["not-avalible"]}>غير متوفر</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card