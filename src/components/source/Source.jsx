import React from 'react';
import "./source.scss"
import cardIMG from "../../assets/sours.png";
import pr1 from "../../assets/pr1.png"
import pr2 from "../../assets/pr2.png"
import SourceCard from './SourceCard';
const Source = () => {
    let produc = [
        {
            id: 1,
            img: pr1,
            title: "Product Mail",
            desc: "Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.",
        },
        {
            id: 2,
            img: pr2,
            title: "Product UI",
            desc: "Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.",
        }
    ];
    return (
        <>
            <section className='source'>
                <div className="container">
                    <div className="source__wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 source_card_wrap">
                                <div className="card">
                                    <h2>Transparent, audited, &open source</h2>
                                    <p>Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.</p>
                                    <a href="#" className='view-oke'>Browse all feature</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 source_card_wrap">
                                <div className="card">
                                    <img src={cardIMG} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="row producs">
                            {
                                produc.length ? produc.map(item => <SourceCard key={item.id} data={item} />) : "<h1>Loading...</h1>"
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Source;