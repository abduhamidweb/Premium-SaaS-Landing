import React from 'react';
import "./apps.scss";
import ap1 from "../../assets/ap1.png";
import ap2 from "../../assets/ap2.png";
import ap3 from "../../assets/ap3.png";
import ap4 from "../../assets/ap4.png";
import AppCard from './AppCard';
import bgL from "../../assets/bgL.png";
import bgR from "../../assets/bgR.png";
import x from "../../assets/x.png";
import arrowBottom from "../../assets/arrowbottom.png";
import arrowTop from "../../assets/arrowtop.png";
import arrowLeftBg from "../../assets/arrowleftBG.png";
import arrowLeft from "../../assets/arrowleft.png";
import arrowRight from "../../assets/arrowright.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import CardChild from './CardChild';
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
    let hozirgiSana = new Date();
    let cardChild = [
        {
            id: 1,
            name: "R. Baynham",
            email: "tranthuy.nute@gmail.com",
            desc: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus. ",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`,
            imgURL: user1,
        },
        {
            id: 2,
            name: "Cooper Kristin",
            email: "tranthuy.nute@gmail.com",
            desc: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus. ",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`,
            imgURL: user2,
        },
        {
            id: 3,
            name: "R. Baynham",
            email: "tranthuy.nute@gmail.com",
            desc: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus. ",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`,
            imgURL: user1,
        },
        {
            id: 4,
            name: "Cooper Kristin",
            email: "tranthuy.nute@gmail.com",
            desc: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus. ",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`,
            imgURL: user2,
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
                        <div className="apps_v1_card">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-12 apps_texts_wrap " style={{ backgroundImage: `url(${bgL})` }}>
                                    <div className="apps_texts mx-auto">
                                        <h3>End-to-end encrypted inbox and messages</h3>
                                        <p>Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.</p>
                                        <button className='view-oke'>Learn More</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12  apps_imgs_wrap " style={{ backgroundImage: `url(${bgR})` }}>
                                    <div className="card mx-auto">
                                        <div className="card-headerok">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="card_header_left">
                                                        <div className="event_x">
                                                            <img src={x} alt="x Image" />
                                                        </div>
                                                        <div className="event_img">
                                                            <img src={arrowBottom} alt="img bottom" />
                                                            <img src={arrowTop} alt="img top" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="card_header_right">
                                                        <div className="arrows">
                                                            <div className="bgIcon">
                                                                <img src={arrowLeftBg} alt="bg icons" />
                                                            </div>
                                                            <div className="icons_wrap">
                                                                <div className="arrow_left">
                                                                    <img src={arrowLeft} alt="icons wrapper" />
                                                                </div>
                                                                <div className="arrow_right">
                                                                    <img src={arrowRight} alt="icons wrapper" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_body">
                                            <h3 className="card-title">
                                                Invitation to present at Bsides
                                            </h3>
                                            {
                                                cardChild.length ? cardChild.map(item => {
                                                    return <CardChild key={item.id} data={item} />
                                                }) : "<h1>Loading...</h1>"
                                            }
                                        </div>
                                    </div>
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