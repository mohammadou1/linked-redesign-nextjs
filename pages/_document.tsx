import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class NextDocument extends Document {
   render() {
      return (
         <Html lang="en" dir="ltr">
            <Head>
               <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
