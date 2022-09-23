import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="An Assistant fot Technology On It!" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#08d461" />
          <meta name="application-name" content="Technology On It - Desk" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
          <link rel="manifest" href="/public/manifest.json" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Technology On It - Desk" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/assets/icons/touch-icon-ipad-retina.png" />
        </Head>
        <body>
          <Main />
          <div id="overlay" />
          <NextScript />
        </body>
      </Html>
    );
  }
}