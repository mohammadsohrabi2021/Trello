import SignupPage from '@/components/template/SignupPage'
import { getSession } from 'next-auth/react'
import React from 'react'

function Signup() {
  return (
    <SignupPage/>
  )
}

export default Signup
export async function getServerSideProps({req}){
  const session =await getSession({req})
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