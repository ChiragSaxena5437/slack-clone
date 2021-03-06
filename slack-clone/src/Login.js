import React from 'react'
import './Login.css'

import {Button} from "@material-ui/core"
import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login()
{
    const [state, disaptch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result =>{
            console.log(result);
            disaptch({
                type: actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    return(
        <div className="login">
            <div className="login__container">
                <img src="https://github.com/ChiragSaxena5437.png" alt=''/>
                <h1>Sign In to Slack Clone -CS</h1>
                <p>CS.slackClone.com</p>
                <Button onClick={signIn} >Sign in with Google</Button>
            </div>
        </div>

    )
}

export default Login