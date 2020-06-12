import React from "react";
import ClientForm from "./component/ClientForm";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./component/NavBar";
import Admin from "./component/ShowDetail/Admin";
import EditDetails from "./component/ShowDetail/EditDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <LOGO /> */}
      <NavBar />
      <Switch>
        <Route path="/showdetails" component={Admin} />
        <Route path="/editdetails" component={EditDetails} />
        <Route path="/clientform" component={ClientForm} />
      </Switch>
    </div>
  );
}

export default App;
