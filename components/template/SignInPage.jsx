import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { setCookie } from "nookies";
function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [status]);

  const loginHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  
    // setCookie(null, "token", email, { path: "/" });
    if (!res.error) router.push("/");
  };
  return (
    <div className="signin-form">
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="plase enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="plase enter passwrd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
      <div>
        <p>Create an account?</p>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
}

export default SignInPage;
