import {href, Link, useNavigate} from 'react-router-dom'

import style from '../assets/style/LoginForm.module.css'

/* Icon */
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useUserData } from '../componants/userDataProvider';
/*  */


function SignUp() {
    const [hasError, setHasError] = useState(false)

    const [user, setUser] = useState({
        userName: '', password:'', favList: [], cart: []
    })

    const navigate = useNavigate()
    const { login } = useUserData()

    let handleSignUp = (e) => {
        e.preventDefault()

        let users = JSON.parse(localStorage.getItem("users")) || []
        const isExist = users.find(
            (User) => {
                return user.userName === User.userName
            }
        )

        if (isExist) {
            setHasError(true)
            return;
        }
        
        users = [...users, user]
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('currentUser', JSON.stringify(user))
        setUser({userName: '', password: ''})
        setHasError(false)
        login(user)
        navigate('/')
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
                    <form onSubmit={handleSignUp} className={style["form"]}>
                        <h1 className={style["h1"]}>إنشاء حساب جديد</h1>
                        <div className={`${style["input-box"]} ${hasError ? style["error-input"] : ''}`}>
                            <input
                                type="text"
                                placeholder="اسم المستخدم"
                                value={user.userName}
                                onChange={(e) => {
                                    setUser(prevUser => ({
                                        ...prevUser, userName: e.target.value
                                    }));
                                    setHasError(false)
                                }}
                                required />
                        </div>
                        <div className={`${style["input-box"]} ${hasError ? style["error-input"] : ''}`}>
                            <input
                                type="password"
                                placeholder="كلمه المرور"
                                value={user.password}
                                onChange={(e) => {
                                    setUser(prevUser => ({
                                        ...prevUser, password: e.target.value
                                    }));
                                    setHasError(false)
                                }}
                                required />
                        </div>

                        <button
                            type="submit"
                            className={style["submit"]}
                        >
                            إنشاء حساب
                        </button>


                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp