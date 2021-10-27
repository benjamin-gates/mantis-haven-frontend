import React, {useState} from "react";
import Nav from "react-bootstrap/Nav";

function Tabs(){
  const initialState = {
    border: "solid 1px rgb(187, 183, 183)",
    borderRadius: "5px",
    borderLeft: "0px"
    }
    const [activeKey, setActiveKey] = useState("1");
    const handleSelect = (eventKey) => setActiveKey(eventKey); 

   return ( <Nav className="flex-row admin-tab" activeKey={activeKey} variant="tabs" onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/images' eventKey="1" >Images List</Nav.Link>
          </Nav.Item >
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/images/add' eventKey="2">Create Image</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/products'  eventKey="3">Products List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/products/add' eventKey="4">Add Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/updates' eventKey="5">Updates List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/admin/dashboard/updates/add' eventKey="6">Post Update</Nav.Link>
          </Nav.Item>
        </Nav>);
}

export default Tabs;