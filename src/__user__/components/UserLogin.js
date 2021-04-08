import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link } from 'react-router-dom'
const UserLogin = () => {
    //초기화 
    const [userLogin, setUserLogin] = useState({
        username: "", password: ""
    })
    //setter
    const { username, password } = userLogin

    const onChange = useCallback(
        e => {
            setUserLogin({
                ...userLogin, [e.target.name]: e.target.value
            })
        })

    const login = () => {
        alert(`Login`)
        axios({
            url: 'http://localhost:8080/usr/signin',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefeg..'
            },
            data: userLogin
        }).then((res) => {
            if (res.data.token) {
                alert(`SUCCESS`)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.user))

            } else {
                alert(`test token`)
            }
        }).catch((err) => {
            alert(`Error`)
            throw err
        })
    }

    const logout = () => {
        alert(localStorage.getItem("user"))
        alert(localStorage.getItem("token"))
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (

        <><form>
            {localStorage.getItem("user")}
            <input
                type="username"
                name="username"
                placeholder="Username"
                onChange={onChange}

            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}

            />
            <div className="button-box">
                <div className="login-toggle-btn">
                    <input type="checkbox" />
                    <label className="ml-10">Remember me</label>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        Forgot Password?
</Link>
                </div>
                <button type="submit" onClick={login}>
                    <span>Login</span>
                </button>
                <button onClick={logout}>
                    <span>Logout</span>
                </button>

            </div>
        </form></>
    )
}

export default UserLogin