import React from "react";

const Base = () => {
    return <>
        <div className="ms-3 me-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="row my-3">
            <div className="col-md-2 d-flex">
                <span> Select device name</span>
            </div>
            <div className="col-md-2">
        <select className="form-select" aria-label="Default select example">
            <option selected>Select device name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
            </div>
        </div>
       <div className="row my-3">
           <div className="col-md-2 d-flex">
               <span> Select amount</span>
           </div>
           <div className="col-md-2">
               <input/>
           </div>
       </div>
        <div className="row my-3">
            <div className="col-md-2">
            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </div>
        </div>
        </div>

    </>
}
export default Base;