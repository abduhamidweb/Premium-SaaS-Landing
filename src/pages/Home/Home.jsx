import React from 'react';
import Router from "../../routes"
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
const Home = () => {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
};

export default Home;