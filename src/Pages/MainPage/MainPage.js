import React from 'react'
import {
  Advantages,
  Header,
  Steps,
  Studio,
  Logos,
  Services,
  Cases,
  ConnectForm,
  CtaForm,
  Footer,
  CookieConsentMessage,
} from '../../Modules'
import { ToastContainer } from 'react-toastify'

const MainPage = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Studio />
      {/*<Logos />*/}
      <Services />
      {/*<Cases />*/}
      <ConnectForm />
      <Advantages />
      <Steps />
      <CtaForm />
      <Footer />
      <CookieConsentMessage />
    </>
  )
}

export { MainPage }
