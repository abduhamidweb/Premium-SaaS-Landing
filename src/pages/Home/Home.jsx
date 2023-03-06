import React from 'react';
import Router from "../../routes"
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import Apps from '../../components/Apps/Apps';
import Source from '../../components/source/Source';
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Service />
            <Apps />
            <Source />
            <Router />
            <Footer />
        </>
    );
};

export default Home;