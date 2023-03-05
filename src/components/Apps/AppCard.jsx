import React from 'react';

const AppCard = ({ data: { id, imgURL, title } }) => {
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                <div className="card-wrap">
                    <div className="card_wrap_img">
                        <img src={imgURL} alt={title} />
                    </div>
                    <div className="card_wrap_txt">
                        <h2>{title && title}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppCard;