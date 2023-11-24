import React, { Fragment } from "react";
import Navbars from "../Nav/NavBar";
import { Outlet } from "react-router-dom";
import Foter from "../Footer/Footer";
import Main from "../../Main/main";
import Home from "../../pages/Home";
function Layout() {
    return (
        <Fragment>
            <Navbars />
            <main>
                <Outlet />
                {/* <Home/> */}
                {/* <Main /> */}
            </main>
            <Foter />
        </Fragment>
    );
}

export default Layout;
 