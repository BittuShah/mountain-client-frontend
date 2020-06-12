import React, { Component } from "react";
// import axios from "axios";
// import TotalViews from "./TotalViews";
import UserMessage from "./UserMessge";

import "./Admin.css";
class Admin extends Component {
  render() {
    return (
      <div className="adminPageMain">
        {/* <TotalViews views={this.state.views} /> */}
        <UserMessage />
      </div>
    );
  }
}

export default Admin;
