import React from 'react';

const ServiceCard = ({ data: { id, imgURL, title, desc } }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 p-2">
                <div className="card">
                    <div className="card-icon">
                        <img src={imgURL ? imgURL : "https://picsum.photos/43/43"} alt="card-icon" />
                    </div>
                    <h5 className="card-title">
                        {
                            title ? title : "the card title is required"
                        }
                    </h5>
                    <p className="card-description">
                        {
                            desc ? desc : "the card description is required"
                        }
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;