'use client'
import { signIn } from 'next-auth/react'

export default function LoginBtn(){
    return(
        <button onClick={()=>{ signIn()}}>깃허브로 로그인</button>
    )
}