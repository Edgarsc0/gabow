import '../styles/globals.scss'
import {SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider  session={session}>
      <Component {...pageProps}/>
    </SessionProvider >
  )
}
