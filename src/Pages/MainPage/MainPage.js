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
} from '../../Modules'
import { ToastContainer } from 'react-toastify'
import { CtaForm } from '../../Modules/CTAForm/CTAForm'

const MainPage = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Studio />
      <Logos />
      <Services />
      <Cases />
      <ConnectForm />
      <Advantages />
      <Steps />
      <CtaForm />
    </>
  )
}

export { MainPage }
