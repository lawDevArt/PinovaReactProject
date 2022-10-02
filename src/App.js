import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom"
import { Component, useEffect, useState } from 'react';
import { app } from './firebase-config';
import Login from './components/Login';
import { getAuth, signInWithEmailAndPassword, auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';
import Home from './components/Home';

const fire = getAuth(app)

function App() {
  const [user, setUser] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasaccount] = useState(false);

  const clearInputs = () => {
    setemail('');
    setPassword('');
  }

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = async () => {
    clearError()
    const user = await signInWithEmailAndPassword(
      fire, 
      email, 
      password)
  }

  const handleSignUp = async () => {
    clearError()
      try {
        const user = await createUserWithEmailAndPassword(
            fire,
            email,
            password
        );
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
  }

  const handleLogout = () => {
    fire.signOut();
  }

  const authListener = () => {
    fire.onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener();
  })

  return (
    <div className="App">
      {
        user ? (
          <Home {...{handleLogout}}/>
        ) : (
          <Login {...{email, setemail, password, setPassword, handleLogin, handleSignUp, setHasaccount, hasAccount}}/>
        )
      }
    </div>
  );
}

export default App;
