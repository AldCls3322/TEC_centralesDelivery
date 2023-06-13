import React, {useEffect} from 'react'
import { auth, signInWithGoogle } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import image from '../imgs/centrales02.jpg';

function SignUp({user, setUser}) {
    const navigate = useNavigate();

    // useEffect(() => {
    // if (user != null) {
    //     navigate('/homerestaurants');
    // }
    // }, [user]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user.displayName);
        })
    },[user])

    return (
        <div>
            <h1>Sign in to the TEC-TO-TABLE</h1>
            <button onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
}

export default SignUp
