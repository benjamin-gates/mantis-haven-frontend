import React from "react";
import Routes from "./Routes"
import Menu from "./Menu";
import Footer from "./Footer";
import "./Layout.css";

function Layout(){
    return <main>
        <Menu />
        <Routes />
        <Footer />
    </main>
}

export default Layout;