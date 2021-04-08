// useEffect(getter), useState(setter) -> redux
import React, { useEffect, useState } from 'react'
import { setActiveSort } from '../../helpers/product'



// js : 싱글쿼터 기본
const usrlist = () => {
    const [usrName, setUsrName] = useState('')
    const [usrNickname, setUsrNickname] = useState('')
    const [usrEmail, setUsrEmail] = useState('')
    const [usrAges, setUsrAges] = useState('')
    const [usrCity, setUsrCity] = useState('')
    const [usrPhone, setUsrPhone] = useState('')


    useEffect = (() => {
        axios.get('url',).then(({ data }) => {
            setAttr(data)
        }).catch(err => {
            alert(`에러가 발생했습니다.`)
            throw err
        })
    }, [])

    return (
        usr ? (<>
            {usr.usrname}
        </>) : ''
    )
}

export default usrlist