import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import dotenv from 'dotenv'
import Header from './header-footer/header'

dotenv.config()

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Routes />
    </BrowserRouter>
, document.getElementById('root'));