import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
import './18n'
import { Spinner } from '@nextui-org/react'
import { NextUIProvider } from '@nextui-org/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Spinner color="default" />}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Suspense>,
)
