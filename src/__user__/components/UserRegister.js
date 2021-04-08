import axios from "axios";
import React, { useCallback, useState } from "react";


const UserRegister = () => {
    const [userRegister, setUserRegister] = useState({
        username: "", password: "", usrEmail: "", usrPhone: ""
    })

    // setter : 소환을 먼저
    const { username, password, usrEmail, usrPhone } = userRegister
    // getter
    const onChange = useCallback
        (e => {
            setUserRegister({
                ...userRegister, [e.target.name]: e.target.value
            })
        })


    const register = () => {
        axios({
            url: 'http://localhost:8080/usr/signup',
            method: "post",
            headers: {
                "Content-Type": "application/json",
                'Authorization': "JWT fefeg.."
            },
            data: userRegister
        }).then((res) => {
                alert(`SUCCESS`)
        })
            .catch((err) => {
                alert(`Test`)
                throw err
            })

            
    }
    

    return (


        <> <form>
            <input
                type="text"
                name="username"
                placeholder="Name"
                onChange={onChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
            />
            <input
                name="usrEmail"
                placeholder="Email"
                type="email"
                onChange={onChange}
            />
            <input
                name="usrPhone"
                placeholder="Phone"
                type="text"
                onChange={onChange}
            />
            <div className="button-box">
                <button type="submit" onClick={register}>
                    <span>Register</span>
                </button>
            </div>
        </form></>
    )
}

export default UserRegister