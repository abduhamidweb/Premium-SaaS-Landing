import React from 'react';

const Clients = ({ data: { img, name, desc, txt } }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto card_wrapper">
                <div className="card">
                    <div className="card-user-detail">
                        <div className="user-img">
                            <img src={img} alt={img} />
                        </div>
                        <div class="detbox" >
                            <h5 class="name">{name}</h5>
                            <p class="designation">{txt}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="card-bg"></div>
            </div>
        </>
    );
};

export default Clients;