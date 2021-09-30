import React from "react";
import { useRouteMatch } from "react-router";
import {Switch, Route} from "react-router-dom";
import ImageDashboard from "./images/ImageDashboard";
import PostUpdate from "./PostUpdate";
import AddProduct from "./AddProduct";

function AdminRoutes(){
    const {url} = useRouteMatch();
    return (
        <Switch>
            <Route path='/admin/dashboard/images'>
                <ImageDashboard />
            </Route>
            <Route path='/admin/dashboard/products/add'>
                <AddProduct />
            </Route>
            <Route path='/admin/dashboard/updates/add'>
                <PostUpdate />
            </Route>
        </Switch>
    )

}

export default AdminRoutes;