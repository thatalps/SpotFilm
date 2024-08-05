import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { startMSW } from './api/mocks'

startMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
