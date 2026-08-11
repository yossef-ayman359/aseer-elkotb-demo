import { MdOutlineFavorite } from 'react-icons/md';
import { useUserData } from '../componants/userDataProvider.jsx';
import { Fragment } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Footer from '../componants/footer.jsx';
import Navbar from '../componants/navbar.jsx';
import style from '../assets/style/FavList.module.css'

function Favorite() {
    const { currentUser, updateUserProfile } = useUserData();
    const navigate = useNavigate();

    if (!currentUser) {
        console.log("Not reg");
        navigate("/Login")
        return ;
    }

    const currentFav = currentUser.favList || [];

    const handleRemoveItem = (bookId) => {
        const updatedFav = currentFav.filter(item => 
            item.id !== bookId
        )

        updateUserProfile({ favList: updatedFav }) 
    }

    return (
        <>
            <div className={style["container"]}>
                <Navbar />

                <main className={style["main-container"]}>
                    <div className={style["items-div"]}>
                    {currentFav.map((book) => (
                        <Fragment key={book.id}>
                            <div key={book.id} className={style["item"]}>
                                <img className={style["book-cover"]} src={book.coverImage} alt={book.title} />
                                
                                <div className={style["details"]}>
                                    <p className={style["book-title"]}>{book.title}</p>
                                    {
                                        book.price ? (
                                        <>
                                            <span className={style["new-price"]}>{book.price} ج.م</span>
                                            <span className={style["old-price"]}>{book.originalPrice} ج.م</span>
                                        </>
                                        ) : (
                                            <span className={style["not-avalible"]}>غير متوفر</span>
                                        )
                                    }
                                </div>

                                <button className={style["Remove-btn"]} onClick={() => {handleRemoveItem(book.id)}}>
                                    <MdOutlineFavorite size={30}/>
                                </button>
                            </div>
                        </Fragment>
                    ))}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Favorite