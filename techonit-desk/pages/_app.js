import Head from 'next/head'
import AuthLayout from '../components/auth/layouts/layout'
import MainLayout from '../components/main/layouts/layout'
import ManageLayout from '../components/manage/layouts/layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // set layout
  const Layout = Component.layout === 'auth' ? AuthLayout :
    Component.layout === 'manage' ? ManageLayout : MainLayout;

  return (
    <>
      <Head>
        <title>Technology On It {Component.title ? ' - ' + Component.title : ''}</title>
        if(Component.description){
          <meta name="description" content={Component.description} />
        }
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp