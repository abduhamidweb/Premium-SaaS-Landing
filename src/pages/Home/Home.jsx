import React from 'react';
import Router from "../../routes"
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import Hero from '../../components/Hero/Hero';
const Home = () => {
    return (
        <>
            <Header />
            <Hero/>
            <Router />
            <Footer />
        </>
    );
};

export default Home;