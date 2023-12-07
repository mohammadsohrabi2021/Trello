import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScaleLoader from "react-spinners/ScaleLoader";
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [status]);

  // ...
  const [loading, setLoading] = useState(false); // اضافه کردن وضعیت "loading"

  const signupHandler = async () => {
    try {
      setLoading(true); // شروع فرآیند loading

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);

      if (data.status === "success") {
        toast.success(data.message);
        router.push("/signin");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // پایان فرآیند loading
    }
  };
  // ...

  return (
    <>
    <div className={'registration-form'}>
      <h3>Registration Form</h3>
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

      <button onClick={signupHandler} disabled={loading} className={'registration-button'}>
        {loading ? (
          <>
            {" "}
            Registering{" "}
            <ScaleLoader
              color="#fff"
              height={20}
              width={2}
              radius={1}
              margin={2}
            />{" "}
          </>
        ) : (
          "Register"
        )}
      </button>

      <div className={'have-account'}>
        <p>Have an account?</p>
        <Link href={"/signin"}>Sign In</Link>
      </div>
    </div>
    <ToastContainer />
  </>

  );
}

export default SignupPage;
