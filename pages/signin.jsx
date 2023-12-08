import SignInPage from '@/components/template/SignInPage'
import { getSession } from 'next-auth/react'
import React from 'react'

function Signin() {
  return (
    <SignInPage/>
  )
}

export default Signin
export async function getServerSideProps({req}){
  const session =await getSession({req})
  console.log(session,"session123")
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return{
    props:{}
  }
}