import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/App.jsx'
import Theme from '/src/styles/theme.jsx'
import GlobalStyle from '/src/styles/global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
        <App />
    </Theme>
  </React.StrictMode>
)
