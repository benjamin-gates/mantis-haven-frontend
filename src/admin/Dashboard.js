import React, {useState} from "react";
import { useRouteMatch } from "react-router";
import {Switch, Route, useHistory, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import PostUpdate from "./PostUpdate";
import ImageDashboard from "./images/ImageDashboard";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import AddProduct from "./AddProduct";
import Tabs from "./Tabs";
import AdminRoutes from "./AdminRoutes";

function Dashboard() {
  const {url} = useRouteMatch();
  const [activeKey, setActiveKey] = useState("/images");
  const history = useHistory();
  const params = useParams();
  console.log('use route match', useRouteMatch());
  console.log('params', params);
  console.log('history', history);
  return (
    <Container fluid>
      {/*<Tabs
        defaultActiveKey="image-dashboard"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="image-dashboard" title="Images" href="/somewhere">
          <ImageDashboard />
        </Tab>
        <Tab eventKey="add-product" title="Add Product">
          <AddProduct />
        </Tab>
        <Tab eventKey="post-update" title="Post Update">
          <PostUpdate />
        </Tab>
        
      </Tabs>*/}
     {/* <Switch>
        <Route exact path={`${url}/images`}>
          <ImageDashboard />
        </Route>
        <Route path={`${url}/images/add`}>
          <ImageDashboard />
        </Route>
        <Route path={`${url}/products/add`}>
          <AddProduct />
        </Route>
        <Route path={`${url}/updates/add`}>
          <PostUpdate />
        </Route>
     </Switch>
      <Tab.Container defaultActiveKey = "images">
        <Nav className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="images" href={`${url}/images`}>Image List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="images-add" href={`${url}/images/add`}>Create Image</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="products-add" >Add Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="updates-add" href={`${url}/add-update`}>Post Update</Nav.Link>
          </Nav.Item>
     </Nav>*/}
     <Tabs />
     <AdminRoutes />
        {/*<Tab.Content>
          <Tab.Pane eventKey="images">
            <ImageDashboard />
          </Tab.Pane>
          <Tab.Pane eventKey="images-add"></Tab.Pane>
          <Tab.Pane eventKey="products-add">
            <AddProduct />
          </Tab.Pane>
          <Tab.Pane eventKey="updates-add">
            <PostUpdate />
          </Tab.Pane>
        </Tab.Content>*/}
      {/*</Tab.Container>*/}
      
    </Container>
  );
}

export default Dashboard;
