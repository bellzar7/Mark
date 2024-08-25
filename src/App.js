import { BrowserRouter } from 'react-router-dom'
//import ReCAPTCHA from 'react-google-recaptcha'
import { SpeedInsights } from '@vercel/speed-insights/react'

import './App.css'
import { AppRouter, ScrollToTop } from './Components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <SpeedInsights />
        <AppRouter />
      </BrowserRouter>
      {/*<ReCAPTCHA*/}
      {/*  sitekey="6LceyBUpAAAAAJhzgCCekeruQ63xiMwp_9L5pfbo"*/}
      {/*  size="invisible"*/}
      {/*/>*/}
    </div>
  )
}

export default App
