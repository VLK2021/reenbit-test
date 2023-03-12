import React, {useState} from 'react';
import {signInWithPopup} from 'firebase/auth';

import {auth, googleAuthProvider} from "../Firebase/Firebase";
import './AuthStyle.css';


export const Auth = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                return setUser(maybeUser);
            }
            signInWithPopup(auth, googleAuthProvider)
                .then((credentials) => setUser(credentials.user))
                .catch((e) => console.error(e));
        })
        return unsub;
    };

    const logout = () => {
        setUser(null);
    }


    return user != null ?
        <>
            <p className={'userName'}>{user.displayName}</p>
            <button className={'btn'} onClick={logout}>logout</button>
        </>
        : <>
            <button className={'btn'} onClick={login}>login with Google</button>
        </>;
};

export default Auth;





