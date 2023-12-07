import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { setCookie } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // اضافه کردن وضعیت "loading"
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [status]);

  const loginHandler = async () => {
    try {
      setLoading(true); // شروع فرآیند loading

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
     
      if (!res.error){
        toast.success(res.error);
        router.push("/");
      }
      else{
        toast.error(res.error);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // پایان فرآیند loading
    }
  };

  return (
   <>
    <div className={"registration-form"}>
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="Please enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Please enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler} className={"registration-button"}>
        Login
      </button>
      <div className={"have-account"}>
        <p>Create an account?</p>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </div>
    {/* <ToastContainer /> */}
   </>
  );
}

export default SignInPage;
