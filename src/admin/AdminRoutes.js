import React from "react";
import { useRouteMatch } from "react-router";
import { Switch, Route } from "react-router-dom";
import ImageList from "./images/ImageList";
import CreateImage from "./images/CreateImage";
import PostUpdate from "./updates/PostUpdate";
import ProductList from "./products/ProductList";
import AddProduct from "./products/AddProduct";
import ListUpdates from "./updates/ListUpdates";

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
      <Route path="/admin/dashboard/products">
        <ProductList />
      </Route>
      <Route path="/admin/dashboard/updates/add">
        <PostUpdate />
      </Route>
      <Route path="/admin/dashboard/updates">
        <ListUpdates />
      </Route>
    </Switch>
  );
}

export default AdminRoutes;
