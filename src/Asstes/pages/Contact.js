import React from "react";
import './Contact.css'
import Baner from "../componet/Baner/Baner";
import Form from "./FromContact";
function Contact() {
    return (
        <>
            <Baner title="Contact Us" smtitle='Contact Us'/>
            <section className="contact-us">
                <div className="CONC container">
                    <div className="contact-us-parent row">
                        <Form/>
                        <div className="contact-us-inheart-1 col-lg-6 col-md-6">
                           <div className="contact-us-inheart-1-1">

                           </div>
                           <div className="contact-us-inheart-1-2">
                                <h5>Contact Us For Any Informations</h5>
                                <div className="">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <h3>
                                        Location
                                    </h3>
                                </div>
                                    <p>
                                        2005 Stokes Isle Apt. 896, Venaville 10010, USA
                                    </p>
                                <div className="">
                                <i class="fa-regular fa-envelope"></i>
                                    <h3>
                                        Email & Phone
                                    </h3>
                                </div>
                                    <p>
                                        info@yourdomain.com
                                        (+68) 120034509
                                    </p>
                                <div className="">
                                    <i class="fa-solid fa-globe"></i>
                                    <h3>
                                        Follow Us
                                    </h3>
                                </div>
                                <p>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </p>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
 