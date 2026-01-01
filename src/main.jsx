import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactLenis from 'lenis/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      <App />
    </ReactLenis>
    
  </React.StrictMode>,
)
