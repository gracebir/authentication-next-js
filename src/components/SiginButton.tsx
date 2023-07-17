'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const SiginButton = () => {
    const {data: session} = useSession()
    console.log(session?.user)
    if(session && session?.user){
        return (
            <div className='flex gap-4 ml-auto'>
                <p>{session.user.email}</p>
                <button onClick={()=> signOut()} className='text-gray-600'>Sign Out</button>
            </div>
        )
    }
  return (
    <button onClick={()=> signIn()} className='border border-gray-300 px-6 py-2 rounded-2xl ml-auto'>
      Sign In
    </button>
  )
}

export default SiginButton
