import React from "react";
import Container from "react-bootstrap/Container";
import CreateMantis from "./CreateMantis";
import PostUpdate from "./PostUpdate";
import DashboardComponent from "./DashboardComponent";
import ImageDashboard from "./images/ImageDashboard";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Dashboard() {
  return (
    <Container fluid>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="dashboard" title="Dashboard">
          <DashboardComponent />
        </Tab>
        <Tab eventKey="create-mantis" title="Create Mantis">
          <CreateMantis />
        </Tab>
        <Tab eventKey="post-update" title="Post Update">
          <PostUpdate />
        </Tab>
        <Tab eventKey="image-dashboard" title="Images">
          <ImageDashboard />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Dashboard;
