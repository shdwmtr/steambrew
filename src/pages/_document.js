import { Html, Head, Main, NextScript } from 'next/document'
 
export const metadata = {
  icon: '/favicon.ico'
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}