import React, { Fragment } from 'react';
import Routes from './routes'
import GlobalStyle from './styles/global'
import Header from "./components/Header";

const App = () => (

    <Fragment>
        <Header />
        <Routes />
        <GlobalStyle />
    </Fragment>
)

export default App;