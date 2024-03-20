import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Estudante_box from './componentes/Estudante_box'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Estudante_box/>
    <Footer></Footer>
  </React.StrictMode>,
)