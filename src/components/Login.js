import React, { useState } from "react";
import logo from '../img/Selection.png'

export const Login = (props) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasaccount] = useState(false);

    const handleChangeEmail = (e) => {
        setemail(e.target.value)
        props.setemail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        props.setPassword(e.target.value)
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <div style={{width: '100%', textAlign: "center"}}>
                    <img src={logo} width="80px" style={{ borderRadius: "50px", backgroundColor: "white", float: "center"}}></img>
                </div>
                <label>Email:</label>
                <input type="text" autoFocus required value={email} onChange={(e) => handleChangeEmail(e)} />
                <p className="errorMsg">{emailError}</p>
                <label>Senha:</label>
                <input type="password" required value={password} onChange={(e) => handleChangePassword(e)}></input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {
                        props.hasAccount ? (
                            <>
                            <button onClick={props.handleLogin}>Entrar</button>
                            <p>Não tem uma conta? <span onClick={() => props.setHasaccount(!props.hasAccount)}>Criar uma conta</span></p>
                            </>
                        ) : (
                            <>
                            <button onClick={props.handleSignUp}>Criar conta</button>
                            <p>Você tem uma conta? <span onClick={() => props.setHasaccount(!props.hasAccount)}>Entrar</span></p>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Login