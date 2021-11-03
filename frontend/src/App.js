import React, { Fragment } from 'react';
import Routes from './routes'
import GlobalStyle from './styles/global'
import Header from "./components/Header";
import Footer from './components/Footer';

const App = () => (

    <Fragment>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyle />
    </Fragment>
)

export default App;