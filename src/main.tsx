import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/base.scss'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter.tsx'
import Navbar from './components/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
