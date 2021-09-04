import React from "react";
import Container from "react-bootstrap/Container";
import PostUpdate from "./PostUpdate";
import ImageDashboard from "./images/ImageDashboard";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AddProduct from "./AddProduct";

function Dashboard() {
  return (
    <Container fluid>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="image-dashboard" title="Images">
          <ImageDashboard />
        </Tab>
        <Tab eventKey="add-product" title="Add Product">
          <AddProduct />
        </Tab>
        <Tab eventKey="post-update" title="Post Update">
          <PostUpdate />
        </Tab>
        
      </Tabs>
    </Container>
  );
}

export default Dashboard;
