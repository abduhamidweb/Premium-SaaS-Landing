import React from 'react';

const CardChild = ({ data: { id, imgURL, date, name, desc, email } }) => {
    return (
        <>
            <div className="card-child">
                <div className="card-child_text">
                    <div className="card-child_text_header">
                        <div className="card-child_text_header_user">
                            <div className="row">
                                <div className="col-2">
                                    <img src={imgURL} alt={name} />
                                </div>
                                <div className="col-10">
                                    <h5>{name}</h5>
                                    <p>{email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-child_text_header_date">
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className="card-child_text_desc">
                        <p>{desc} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardChild;