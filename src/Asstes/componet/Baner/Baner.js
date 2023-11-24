import React from "react";
import '../Baner/baner.css'
import { Link } from "react-router-dom";
const Baner = (props) => {
    return (
        <section className="baner">
            <div className="banerinhert container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>{props.title}</h2> 
                        <li>
                            <Link className="text">
                                <i class="fa-solid fa-house"></i>Home
                            </Link>
                            /
                            <p>
                                {props.smtitle}
                            </p>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Baner;