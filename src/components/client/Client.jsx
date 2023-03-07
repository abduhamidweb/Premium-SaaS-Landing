import React from 'react';
import "./client.scss";
import A1 from "../../assets/A1.png";
import A2 from "../../assets/A2.png";
import A3 from "../../assets/A3.png";
import Clients from './clients';
const Client = () => {
    let clientUsers = [
        {
            id: 1,
            name: "Patrick Abram",
            desc: "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus",
            txt: "Verified Graduate",
            img: A1,
        },
        {
            id: 2,
            name: "Esther Howard",
            desc: "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus",
            txt: "Verified Graduate",
            img: A2,
        },
        {
            id: 3,
            name: "Jenny Wilson",
            desc: "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.",
            txt: "Verified Graduate",
            img: A3,
        },
    ];
    return (
        <>
            <section className='client'>
                <div className="container">
                    <div className="client_title">
                        <h2>What our clients say</h2>
                        <p>Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien.</p>
                    </div>
                    <div className="row clients">
                        {
                            clientUsers.length ? clientUsers.map(item => <Clients key={item.id} data={item} />) :
                                "<h1>Loading...</h1>"
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Client;