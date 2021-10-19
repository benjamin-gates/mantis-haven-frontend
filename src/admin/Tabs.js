import React from "react";
import Nav from "react-bootstrap/Nav";

function Tabs(){
   return ( <Nav className="flex-row">
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/images'>Images List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/images/add'>Create Image</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/products'>Products List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/products/add'>Add Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/updates'>Updates List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/updates/add'>Post Update</Nav.Link>
          </Nav.Item>
        </Nav>);
}

export default Tabs;