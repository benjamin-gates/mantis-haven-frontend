import React from "react";
import Container from "react-bootstrap/Container";
import CreateMantis from "./CreateMantis";
import PostUpdate from "./PostUpdate";
import { Switch, Route } from "react-router-dom";

function Dashboard() {
  return (
    <Container fluid>
           
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="/dashboard"
          >
            View Mantids
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="admin/create">
            Create Mantis
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/post">
            Post Update
          </a>
        </li>
      </ul>
        <Route path="admin/create">
          <CreateMantis />
        </Route>
        <Route path="admin/post">
            <PostUpdate />
        </Route>
    </Container>
  );
}

export default Dashboard;
