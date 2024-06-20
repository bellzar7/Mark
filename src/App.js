import { BrowserRouter } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'

import './App.css'
import { AppRouter } from './Components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
