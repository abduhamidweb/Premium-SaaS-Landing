import React from 'react';
import "./service.scss";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import ServiceCard from './ServiceCard';
const Service = () => {
    let cards = [
        {
            id: 1,
            imgURL: i1,
            title: "User information",
            desc: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
        },
        {
            id: 2,
            imgURL: i2,
            title: "Deal tracking",
            desc: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
        },
        {
            id: 3,
            imgURL: i3,
            title: "Pipeline management",
            desc: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
        },
        {
            id: 4,
            imgURL: i4,
            title: "Reporting dashboard",
            desc: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
        },
        {
            id: 5,
            imgURL: i5,
            title: "Meeting scheduling",
            desc: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
        },
        {
            id: 6,
            imgURL: i6,
            title: "Email tracking",
            desc: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
        },
    ];

    return (
        <>
            <section className='service'>
                <div className="container">
                    <div className="service_content">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12" >
                                <h2>Powerful features to help you manage all your leads</h2>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <p className='title-desc'>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
                            </div>
                        </div>
                        <div className="row service_cards">
                            {
                                cards.length ? cards.map(card => {
                                    return <ServiceCard data={card} key={card.id} />
                                }) : "<h1>Loading...</h1>"
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;