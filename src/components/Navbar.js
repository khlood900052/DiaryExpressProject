import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { Navbar } from "react-bootstrap";
import logo from "./images/logo.png";
=======
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
    toast.success("Logged out successfully");
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/AdminLogin" className="nav-link">
            Admin Login
          </NavLink>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/Login" className="nav-link">
=======
          <NavLink to="/login" className="nav-link">
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            Customer Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/AboutUs" className="nav-link">
            About Us
          </NavLink>
        </li>
      </ul>
    );

    const customerLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/Profile" className="nav-link">
=======
          <NavLink to="/profile" className="nav-link">
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            Customer Portal
          </NavLink>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/Order" className="nav-link">
            Place Order
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/CustomerOrders" className="nav-link">
            Transaction History
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
=======
          <a href="/Order" className="nav-link">
            Place Order
          </a>
        </li>
        <li className="nav-item">
          <a href="/CustomerOrders" className="nav-link">
            Transaction History
          </a>
        </li>
        <li className="nav-item">
          <NavLink to="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </NavLink>
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
        </li>
      </ul>
    );

    const adminLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/AdminPortal" className="nav-link">
=======
          <NavLink to="/adminportal" className="nav-link">
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            Admin Portal
          </NavLink>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/AdminRegister" className="nav-link">
=======
          <NavLink to="/adminregister" className="nav-link">
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            Add New Admin
          </NavLink>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/AdminDeactivate" className="nav-link">
=======
          <NavLink to="/admindeactivate" className="nav-link">
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            Deactivate an Admin
          </NavLink>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/GetAllCustomers" className="nav-link">
=======
          <NavLink to="/getallcustomers" className="nav-link">
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            Customers Information
          </NavLink>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <NavLink to="/CustomersReport" className="nav-link">
            Customers Report
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
=======
          <NavLink to="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </NavLink>
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
<<<<<<< HEAD
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
=======
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
<<<<<<< HEAD
=======
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
          </ul>
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
          {localStorage.usertoken
            ? localStorage.isAdminLogin
              ? adminLink
              : customerLink
            : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Landing);
