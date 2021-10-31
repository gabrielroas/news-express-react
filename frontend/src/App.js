import React, { Fragment } from 'react';
import Routes from './routes'
import GlobalStyle from './styles/global'
import { logout, isAuthenticated } from "./services/auth";

const App = () => (

    <Fragment>
        <h1>News</h1>
        <a href="/home"> Home </a>|
        <a href="/profile"> MyProfile </a>|
        {
            isAuthenticated() ?
            <a href="/" onClick={() => logout()}> LogOut </a> :
            <a href="/signin"> Login</a>
        }

        <Routes />
        <GlobalStyle />
    </Fragment>
)

export default App;