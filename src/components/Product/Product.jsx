import React from 'react';
import "./produc.scss"
import C1 from "../../assets/C1.png";
import C2 from "../../assets/C2.png";
import C3 from "../../assets/C3.png";
import ProductCard from './ProductCard';
const Product = () => {
    let hozirgiSana = new Date();

    let cards = [
        {
            id: 1,
            img: C1,
            title: "Product Mail is taking on Gmail by betting on privacy",
            desc: "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`
        },
        {
            id: 2,
            img: C2,
            title: "Wants You To Sign Out Of Google Workspace Forever",
            desc: "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`
        },
        {
            id: 3,
            img: C3,
            title: "The Best Email Encryption Services for 2023",
            desc: "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
            date: `${hozirgiSana.getDate().toString().padStart(2, '0')}/${(hozirgiSana.getMonth() + 1).toString().padStart(2, '0')}/${hozirgiSana.getFullYear()}`
        },
    ];
    return (
        <>
            <section className='product'>
                <div className="container">
                    <div className="product_wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6  my-2">
                                <h2 className='product_title'>Product in the news</h2>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6  my-2 link">
                                <a href="#" className='btn-oke '>Browse all news</a>
                            </div>
                        </div>
                        <div className="row">
                            {
                                cards.length ? cards.map(item => <ProductCard key={item.id} data={item} />) : "<h1>Loading..</h1>"
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;