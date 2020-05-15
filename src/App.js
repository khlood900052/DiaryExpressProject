import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import Register from "./components/Register";
import Profile from "./components/Profile";
import AdminPortal from "./components/AdminPortal";
import AdminRegister from "./components/AdminRegister";
import AdminDeactivate from "./components/AdminDeactivate";
import AllCustomers from "./components/AllCustomers";
import CustomerOrders from "./components/CustomerOrders";
import Order from "./components/Order";
import OrderPayment from "./components/OrderPayment";
<<<<<<< HEAD
import CustomersReport from "./components/CustomersReport";
=======
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ToastContainer />
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Switch>
<<<<<<< HEAD
              <Route path="/Register" component={Register} />
              <Route path="/Login" component={Login} />
              <Route path="/Profile" component={Profile} />
              <Route path="/AdminLogin" component={AdminLogin} />
              <Route path="/AdminPortal" component={AdminPortal} />
              <Route path="/AdminRegister" component={AdminRegister} />
              <Route path="/AdminDeactivate" component={AdminDeactivate} />
              <Route path="/GetAllCustomers" component={AllCustomers} />
=======
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/adminlogin" component={AdminLogin} />
              <Route path="/adminportal" component={AdminPortal} />
              <Route path="/adminregister" component={AdminRegister} />
              <Route path="/admindeactivate" component={AdminDeactivate} />
              <Route path="/getallcustomers" component={AllCustomers} />
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
              <Route path="/Order" component={Order} />
              <Route path="/OrderPayment" component={OrderPayment} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/CustomerOrders" component={CustomerOrders} />
<<<<<<< HEAD
              <Route path="/CustomersReport" component={CustomersReport} />
=======
>>>>>>> a54e162cde2181af8104aac8cfa87c8aac83d5be
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
