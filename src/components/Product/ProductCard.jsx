import React from 'react';

const ProductCard = ({ data: { title, desc, img, date } }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-2 " >
                <div className="card p-4 card-wrapper">
                    <img src={img} alt="img" className="card-img img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-description">
                            {desc.substring(0, 107)}...
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="card-footer">
                        <p>{date}</p>
                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;