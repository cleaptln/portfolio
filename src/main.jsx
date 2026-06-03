import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { TransitionProvider } from './components/context/TransitionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/cleaportolan">
    <TransitionProvider>
        <App />
    </TransitionProvider>
  </BrowserRouter>,
)