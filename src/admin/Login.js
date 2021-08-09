import React from "react";
import {useHistory} from "react-router-dom";

function Login(){
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/admin/dashboard");

    }
    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "90px"}}>
            <label htmlFor="username" className="form-component" style={{ width: "300px"}}>
                Username:<input type="text" style={{width: "180px", marginLeft:"10px"}}/>
            </label>
            <label htmlFor="password" className="form-component" style={{width: "300px"}}>
                Password:
                <input type="text" style={{width: "180px", marginLeft:"13px"}}/>
            </label>
            <div className="btn-group" role="group" aria-label="login-buttons" style={{width: "100px", display: "flex", justifyContent: "left", alignSelf: "left", margin: "0px"}}>
            <button type="button" className="btn btn-success btn-outline-light" onClick={() => history.goBack()}>Cancel</button>
            <button type="submit" className="btn btn-success btn-outline-light">Submit</button>
            </div>
        </form>
    )
}

export default Login;