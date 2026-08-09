import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

function UserProvider({ children })
{
    // retrive currentUser from local Storage to handle user data
    const [currentUser, setCurrentUser] = useState(() => {
        return JSON.parse(localStorage.getItem('currentUser')) || null
    })
    
    // set user already exist in currentUser row in local Storage
    const login = (userData) => {
        setCurrentUser(userData)
        localStorage.setItem('currentUser', JSON.stringify(userData))
    }
    
    // clear currentUser
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    // update user data if add item in cart or favoraite 
    const updateUserProfile = (updatedData) => {
        // update user data for current session
        const newUserData = { ...currentUser, ...updatedData };
        setCurrentUser(newUserData);
        localStorage.setItem('currentUser', JSON.stringify(newUserData));

        // update local storage
        const users = JSON.parse(localStorage.getItem('users')) || []   
        const updatedUsers = users.map((user) => 
            user.userName === newUserData.userName ? newUserData : user
        )
        localStorage.setItem('users', JSON.stringify(updatedUsers))
    };
    
    return (
        <UserDataContext.Provider value={{ currentUser, login, logout, updateUserProfile }}>
            { children }
        </UserDataContext.Provider>
    );
    
};

const useUserData = () => useContext(UserDataContext)

export {UserProvider, useUserData}