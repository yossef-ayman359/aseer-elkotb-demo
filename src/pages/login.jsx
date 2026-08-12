import {href, Link, replace, useNavigate} from 'react-router-dom'

import style from '../assets/style/LoginForm.module.css'

/* Icon */
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useUserData } from '../componants/userDataProvider';
/*  */

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [hasError, setHasError] = useState(false)

    // call login function to set currentUser
    const { login } = useUserData();
    
    const navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault()

        const users = JSON.parse(localStorage.getItem("users")) || []

        // check if user is exist 
        const isValid = users.find(
            (user) => {
                return user.userName == userName && user.password == password
            }
        )
        if (isValid) {
            login(isValid); // set currentUser
            setHasError(false)
            navigate('/')
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

                        {/* <div className={style["remember-forgot"]}>
                            <label>
                                تذكرنى
                                <input type="checkbox" />
                            </label>
                            <a href="#">نسيت كلمه السر؟</a>
                        </div> */}

                        <button
                            type="submit"
                            className={style["submit"]}
                            onClick={ handleLogin}>
                            Login
                        </button>

                        <div className={style["reg-link"]}>
                            <p>ليس لديك حساب؟ <a href="/Signup">إنشاء حساب</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login