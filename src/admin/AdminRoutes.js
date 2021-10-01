import React from "react";
import { useRouteMatch } from "react-router";
import { Switch, Route } from "react-router-dom";
import ImageDashboard from "./images/ImageDashboard";
import ImageList from "./images/ImageList";
import CreateImage from "./images/CreateImage";
import PostUpdate from "./PostUpdate";
import AddProduct from "./AddProduct";

function AdminRoutes() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path="/admin/dashboard/images/add">
        <CreateImage />
      </Route>
      <Route path="/admin/dashboard/images">
        <ImageList />
      </Route>
      <Route path="/admin/dashboard/products/add">
        <AddProduct />
      </Route>
      <Route path="/admin/dashboard/updates/add">
        <PostUpdate />
      </Route>
    </Switch>
  );
}

export default AdminRoutes;
