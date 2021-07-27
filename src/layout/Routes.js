import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Shop from "../shop/Shop";

function Routes(){
    return <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/shop">
            <Shop />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
}

export default Routes;