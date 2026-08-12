import { Fragment, useState } from 'react';
import { Navigate } from "react-router-dom";
import Navbar from "../componants/navbar";
import Footer from '../componants/footer';
import { useUserData } from "../componants/userDataProvider";
import style from "../assets/style/Cart.module.css"


function Cart() {
    const { currentUser, updateUserProfile } = useUserData();

    if (!currentUser) {
        return <Navigate to="/Login" replace />;
    }

    const totalBeforeSale = currentUser?.cart?.reduce(
        ((total, book) => total + book.originalPrice * book.count), 0
    );

    const totalAfterSale = currentUser?.cart?.reduce(
        ((total, book) => total + book.price * book.count), 0
    );

    const totalBooks = currentUser.cart.reduce(
        ((total, book) => total + book.count), 0
    )

    const totalUniqBooks = currentUser.cart.length



    const handleQuantityChange = (bookId, amount) => {
        const updatedCart = currentUser.cart
            .map(item => {
                if (item.id === bookId) {
                    const newQuantity = item.count + amount;
                    return newQuantity > 0 ? { ...item, count: newQuantity } : null;
                }
                return item;
            })
            .filter(Boolean); // إزالة العناصر التي أصبحت null (حذف الكتاب)

        updateUserProfile({ cart: updatedCart });
    };
    
    const handleRemoveItem = (bookId) => {
        const updatedCart = currentUser.cart.filter(
            (book) => bookId !== book.id
        )

        updateUserProfile({ cart: updatedCart });
    }

    return (
        <>
            <div className={style["Cart-container"]}>
                <Navbar/>

                <main className={style["main-container"]}>
                    <div className={style["summary"]}>
                        <p className={style["Thead"]}>عدد الأصناف</p>
                        <p className={style["Thead"]}>عدد الكتب</p>
                        <p className={style["Thead"]}>الاجمالى قبل الخصم</p>
                        <p className={style["Thead"]}>الاجمالى بعد الخصم</p>

                        <p>{ totalUniqBooks}</p>
                        <p>{ totalBooks}</p>
                        <p>{ totalBeforeSale}</p>
                        <p>{ totalAfterSale}</p>
                    </div>

                    <div className={style["items-div"]}>
                    {currentUser?.cart?.map((book) => (
                        <Fragment key={book.id}>
                            <div key={book.id} className={style["item"]}>
                                <img className={style["book-cover"]} src={book.coverImage} alt={book.title} />
                                
                                <div className={style["details"]}>
                                    <p className={style["book-title"]}>{book.title}</p>
                                    <span className={`${style["new-price"]} ${style["price"]}`}>{book.price} ج.م</span>
                                    <span className={`${style["old-price"]} ${style["price"]}`}>{book.originalPrice} ج.م</span>
                                </div>
                                <button className={style["Remove-btn"]} onClick={() => {handleRemoveItem(book.id)}}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="red">
                                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className={style["total-quantity-controls"]}>
                                <div className={style["quantity-controls"]}>
                                    <button className={style["btn"]} onClick={() => handleQuantityChange(book.id, 1)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 -960 960 960"
                                            width="24px"
                                            fill="#000000">
                                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                        </svg>
                                    </button>
                                    <span className={style["quantity"]}>{book.count}</span>
                                    <button className={style["btn"]} onClick={() => handleQuantityChange(book.id, -1)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 -960 960 960"
                                            fill="#000000">
                                            <path d="M200-440v-80h560v80H200Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className={style["total-item-price"]}>
                                    الإجمالي: {(book.price) * book.count} ج.م
                                </p>
                            </div>
                        </Fragment>
                    ))}
                    </div>
                </main>

                <Footer/>
            </div>

        </>
    )
}

export default Cart;