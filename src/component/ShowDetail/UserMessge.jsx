import React, { Component } from "react";
import Pagination from "./Pagination";
import { paginate } from "./paginate";

import axios from "axios";
import { Link } from "react-router-dom";

class UserMessage extends Component {
  state = {
    messages: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://bluemountainproductions-client.herokuapp.com/api/contact"
    );
    this.setState({ messages: data, totalCount: data.length });
  }

  updateData = (e) => {
    const msgName = e.currentTarget.getAttribute("value");

    const msgId = e.currentTarget.getAttribute("id");

    sessionStorage.setItem("shopId", msgId);

    sessionStorage.setItem("shopName", msgName);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, messages } = this.state;

    const data = paginate(messages, currentPage, pageSize);

    return { messages: data };
  };

  render() {
    const { messages } = this.getPagedData();

    // const messages = this.state.messages;
    const card = messages.map((message) => {
      let badgeClass;
      if (message.orderStatus === "Confirmed") {
        badgeClass = "success";
      } else if (message.orderStatus === "Pending") {
        badgeClass = "warning";
      } else {
        badgeClass = "danger";
      }

      return (
        <div key={message._id} className="card messageCard">
          <div className="card-header">{message.shopName}</div>
          <div className="card-body p-1">
            <table className="table-responsive-sm table table-bordered tableStyle">
              <tbody>
                <tr style={{ width: "20px" }}>
                  <th scope="row">Appointment: </th>
                  <td>{`${message.appointmentDate}, ${message.appointmentTime}`}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile Number: </th>
                  <td>{message.shopNumber}</td>
                </tr>
                <tr>
                  <th scope="row">Email Address: </th>
                  <td>{message.shopEmail}</td>
                </tr>
                <tr>
                  <th scope="row">Shop Address: </th>
                  <td>{message.shopAddress}</td>
                </tr>

                <tr>
                  <th scope="row">Shop Comment: </th>
                  <td>{message.shopComment}</td>
                </tr>

                <tr>
                  <th scope="row">Order Status: </th>
                  <td>
                    <span className={`badge badge-${badgeClass}`}>
                      {message.orderStatus}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Visitor's Name: </th>
                  <td>{message.visitorName}</td>
                </tr>
              </tbody>
            </table>
            {/* <h6 className="card-title">{`${message.appointmentDate}, ${message.appointmentTime}`}</h6>
            <p className="card-text">{message.shopNumber}</p>
            <p className="card-text">{message.shopEmail}</p>
            <p className="card-text">{message.shopAddress}</p>
            <p className="card-text">{message.shopComment}</p>
            <p className="card-text">{message.visitorName}</p> */}
            <a href={`mailto:${message.shopEmail}`} className="btn btn-primary">
              Email
            </a>
            <Link
              // onClick={this.deleteMessage(message._id)}
              onClick={this.updateData}
              className="btn btn-primary delete"
              id={message._id}
              value={message.shopName}
              to="/editdetails"
            >
              Edit
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <React.Fragment>
          {card}
          <Pagination
            itemsCount={this.state.totalCount}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default UserMessage;
