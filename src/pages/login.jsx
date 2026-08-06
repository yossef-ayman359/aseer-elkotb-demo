import {href, Link} from 'react-router-dom'

import style from '../assets/style/LoginForm.module.css'

/* Icon */
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
/*  */

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    let   [hasError, setHasError] = useState(false)
    
    let handleLogin = (e) => {
        e.preventDefault()
    
        const users = JSON.parse(localStorage.getItem("users")) || []
        const isValid = users.find(
            (user) => {
                user.userName === userName && user.password === password
            }
        )
        if (isValid) {
            setHasError(false)
        } else {
            setHasError(true)
        }
    }

    return (
        <>
            <div className={style["body-login-page"]}>
                <div className={style["back-home"]}>
                    <Link className={ style["link-home"]}  to="/">
                        <IoMdArrowRoundBack />
                    </Link>
                </div>

                <div className={style["form-background"]}>
                    <form action="post" className={style["form"]}>
                        <h1 className={style["h1"]}>تسجيل الدخول</h1>
                        <div className={`${style["input-box"]} ${hasError ? style["error-input"] : ''}`}>
                            <input
                                type="text"
                                placeholder="اسم المستخدم"
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                    setHasError(false)
                                }}
                                required />
                        </div>
                        <div className={`${style["input-box"]} ${hasError ? style["error-input"] : ''}`}>
                            <input
                                type="password"
                                placeholder="كلمه المرور"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setHasError(false)
                                }}
                                required />
                        </div>

                        <div className={style["remember-forgot"]}>
                            <label>
                                تذكرنى
                                <input type="checkbox" />
                            </label>
                            <a href="#">نسيت كلمه السر؟</a>
                        </div>

                        <button
                            type="submit"
                            className={style["submit"]}
                            onClick={ handleLogin}>
                            Login
                        </button>

                        <div className={style["reg-link"]}>
                            <p>ليس لديك حساب؟ <a href="#">إنشاء حساب</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login