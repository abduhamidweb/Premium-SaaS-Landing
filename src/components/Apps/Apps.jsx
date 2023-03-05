import React from 'react';
import "./apps.scss";
import ap1 from "../../assets/ap1.png";
import ap2 from "../../assets/ap2.png";
import ap3 from "../../assets/ap3.png";
import ap4 from "../../assets/ap4.png";
import AppCard from './AppCard';
const Apps = () => {
    let appCards = [
        {
            id: 1,
            title: "Email,",
            imgURL: ap1
        },
        {
            id: 2,
            title: "Events,",
            imgURL: ap2
        },
        {
            id: 3,
            title: "Files,",
            imgURL: ap3
        },
        {
            id: 4,
            title: "Documents,",
            imgURL: ap4
        },
    ];
    return (
        <>
            <section className='apps'>
                <div className="container">
                    <div className="apps_content">
                        <div className="apps_title">
                            <h2 className='apps_title_top'>Essential apps that protect your</h2>
                            <div className="inForm">
                                <div className="row w-75 mx-auto">
                                    {
                                        appCards.length ? appCards.map(appCard => {
                                            return <AppCard key={appCard.id} data={appCard} />
                                        }) : "<h1>Loading...</h1>"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Apps;