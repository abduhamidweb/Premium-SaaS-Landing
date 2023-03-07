import React from 'react';

const SourceCard = ({ data: { id, title, img, desc } }) => {
    return (
        <>
            <div className="col-lg-6 col-md-6 col-sm-12 product_info my-3">
                <div className="product_info-card">
                    <h5>{title ? title : ""}</h5>
                    <p>{desc ? desc : ""}</p>
                    <img src={img ? img : ""} className='img-fluid produc-img' alt="img" />
                </div>

            </div>
        </>
    );
};

export default SourceCard;