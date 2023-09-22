import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
   <SessionProvider session={pageProps.session}>
     <Layout>
      <Component {...pageProps} />
    </Layout>
   </SessionProvider>
  );
}
