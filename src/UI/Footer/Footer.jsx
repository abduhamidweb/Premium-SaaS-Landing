import React from 'react';
import logo from "../../assets/logo.png";
import "./footer.scss"
const Footer = () => {
    return (
        <>

            <footer>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 ">
                        <div class="col mb-3">
                            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                                <img src={logo} alt="" />
                            </a>
                            <div className="footer_card">
                                <h5>Subscribe to our newsletter</h5>
                                <form>
                                    <input type="text" placeholder='Enter your email' />
                                    <button className='btn-oke w-100 mt-1'>Subscribe</button>
                                </form>
                            </div>
                        </div>

                        <div class="col mb-3">

                        </div>

                        <div class="col mb-3">
                            <h5>Pages</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing single</a></li>
                            </ul>
                        </div>
                        <div class="col mb-3 pt-5">
                            <h5></h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers single</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Request a demo</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Login</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sign Up</a></li>
                            </ul>
                        </div>

                        <div class="col mb-3">
                            <h5>Utility Pages</h5>






                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"> Utility Pages</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Style guide</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Password protected</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">404 Not found</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Licenses</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Changelog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='footer-link'>
                <div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div class="col-md-4 d-flex align-items-center">
                            <span class="mb-3 mb-md-0 text-muted copyRight">Copyright © Product | Designed by <a href="#">Webocean LTD </a> - Powered by <a href="#">Webflow</a></span>
                        </div>
                        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li class="ms-3"><a class="text-muted" href="#">
                                <i class="bi bi-facebook"></i>
                            </a></li>
                            <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-twitter"></i></a></li>
                            <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-linkedin"></i></a></li>
                            <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-instagram"></i></a></li>
                        </ul>
                    </footer>
                </div>
            </footer>
            <footer className='footer-bottom'>
                <div className="container">
                    <div className="row bottom_wrap">
                        <div className="col-6 px-5 mx-auto">
                            <button className='view-oke'>View pricing</button>
                            <button className='view-oke'>View pricing</button>
                            <button className='btn-oke'>Get a demo</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;