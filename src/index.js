import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/topBar'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <TopBar/>
          <Routes/>
        </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

