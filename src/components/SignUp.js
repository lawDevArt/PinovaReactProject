
import { useContext, useEffect, useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid, Icon, makeStyles, Typography, TextField} from '@material-ui/core';
import { app } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    getAuth,
  } from "firebase/auth";

const auth = getAuth(app);

export const SingUpAcont = () => {
    const [user, setUser] = useState({});
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [auth])

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h3> Register </h3>
            <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="filled"
                onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }}
            />
            <input
                placeholder="Password..."
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}
            />

            <button onClick={register}> Create User</button>
        </div>
    )
}

export default SingUpAcont