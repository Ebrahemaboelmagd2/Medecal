import React from "react";
import foterlogo from'../../../images/logo.png'
import face from'../../../images/Faceboook.png'
import Insta from'../../../images/Insta.png'
import Liked from'../../../images/Liked IN.png'
import Twiter from'../../../images/Twiter.png'
import '../Footer/Footer.css';
const Foter = () =>{
    return(
        <footer className="foooter container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <img src={foterlogo} className="foterlogo" />
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    <div className="fotercontact">
                        <div className="foterIcon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="foterInfo">
                            <h5>Contact Us</h5>
                            <h4> +01 123 456 7890</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Faq's</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Our Service</h2>
                    <ul>
                        <li><a href="#">Dental Care</a></li>
                        <li><a href="#">Cardiac Clinic</a></li>
                        <li><a href="#">Massege Therapy</a></li>
                        <li><a href="#">Cardiology</a></li>
                        <li><a href="#">Precise Diagnosis</a></li>
                        <li><a href="#">Abmbulance Services</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Subcribe</h2>
                        <ul>
                            <li><a href="#"><input type="text" placeholder="Email Adress"/></a></li>
                            <li><button>Subcribe Now</button></li>
                            <ul className="icons">
                                <li> <a href="#"> <img src={face}/> </a> </li>
                                <li> <a href="#"> <img src={Twiter}/> </a> </li>
                                <li> <a href="#"> <img src={Insta}/> </a> </li>
                                <li> <a href="#"> <img src={Liked}/> </a> </li>
                            </ul>
                        </ul>
                </div>
            </div>
            <div className="foterbotom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h4>Copyright © 2023 Design & Developed by
                                <a> ThemeTrades </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Foter;