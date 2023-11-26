import React from "react";

const Header = () => {
    return <>
    <div className="mb-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">RadEl</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/my-table">MainTable</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-base">Device</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-replace">Replace</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-orders">ShowOrder</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-add">AddComponents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-add-devices">AddDevices</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-auth">Authentication</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </>
}
export default Header;