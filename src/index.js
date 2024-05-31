import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './18n'
import { Spinner } from 'react-bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Spinner animation="border" />}>
    <App />
  </Suspense>,
)
