import React from "react";
import headerImg from '../../images/doctor.7c2bc96d67d3eba1d64a.png'
import './Home.css';
import Main from "../Main/main";
const Home = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <button><a href="">Read More</a></button>
                        <span>+</span>
                    </div>
                    <div className="col-lg-6 col-md-6">
                       <div className="headerbox">
                            <img className="doc" src={headerImg} />
                            <i class="fa-regular fa-square"></i>
                       </div>
                    </div>
                </div>
            </div>
            <Main />
        </header>
    )
}
export default Home;