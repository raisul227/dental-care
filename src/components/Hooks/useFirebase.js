
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import FirebaseAuthentication from './../../Firebase/firebase.init';
FirebaseAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                emailVerify();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
    }
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // setName(user)
            }
        })
    }, [])
    return {
        user,
        error,
        setError,
        handleEmail,
        handleName,
        handlePassword,
        handleRegistration,
        googleSignIn,
        handleLogin,
        logOut
    }
};

export default useFirebase;