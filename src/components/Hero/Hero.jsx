import React from 'react';
import "./hero.scss"
import hero from "../../assets/hero.png";
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="hero_content">
                        <h2>A CRM dashboard for engineering teams</h2>
                        <p>Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.</p>
                        <div className="hero_links">
                            <a href="#" className='btn-oke'> Get a demo</a>
                            <a href="#" className='view-oke'>View pricing</a>
                        </div>
                        <div className="hero_view" >
                            <img src={hero} className='img-fluid' alt="img" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;