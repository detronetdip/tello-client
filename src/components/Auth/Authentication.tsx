import React from 'react'
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { userState } from '../../context'

function Authentication  ({children}:any) {
  const user=useRecoilValue(userState);
  return (
    <>
    {user.isLoggedIn?children:<Navigate to={"/auth"}/>}
    </>
  )
}

export default Authentication