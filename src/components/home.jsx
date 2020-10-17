import React, { Fragment } from 'react';
import AppBar from './appbar.jsx';
import Header from './header.jsx';
import Checkout from './Checkout.js';


function Home() {
    return (
        <Fragment>
             <AppBar/> 
             <Header/>
             <Checkout/>
        </Fragment>
    )
};


export default Home;