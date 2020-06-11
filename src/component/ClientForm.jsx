import React, { Component } from "react";
import axios from "axios";
import LOGO from "../photos/LOGO.png";

class ClientForm extends Component {
  submitData = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://bluemountainproductions-client.herokuapp.com/api/contact",
        {
          shopName: e.target.elements.ShopName.value,
          shopEmail: e.target.elements.ShopEmail.value,
          shopNumber: e.target.elements.ShopMobileNo.value,
          shopAddress: e.target.elements.ShopAddress.value,
          shopComment: e.target.elements.ShopComment.value,
          appointmentDate: e.target.elements.ShopAppointmentDate.value,
          appointmentTime: e.target.elements.ShopAppointmentTime.value,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get("https://bluemountainproductions-client.herokuapp.com/api/contact")
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="text-center mb-5 mt-3">
          <img src={LOGO} alt="Logo" className="ourLogo" />
        </div>

        <h3 className="formTitle">Client Infromation</h3>

        <hr className="titleLine" />

        <form onSubmit={this.submitData}>
          {/* Shop Name */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopName">
              Shop Name
            </label>
            <input
              type="text"
              className="form-control"
              id="ShopName"
              placeholder="Enter Shop Name"
            />
          </div>
          {/* Shop Email */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopEmail">
              Shop Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="ShopEmail"
              placeholder="Enter Shop Email"
            />
          </div>
          {/* Shop Number */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopMobileNo">
              Shop Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="ShopMobileNo"
              placeholder="Enter Shop Number"
            />
          </div>
          {/* Shop Address */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopAddress">
              Shop Address
            </label>
            <textarea
              className="form-control"
              id="ShopAddress"
              placeholder="Enter Shop Address"
              rows="3"
            ></textarea>
          </div>
          {/* Shop Comment */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopComment">
              Comment
            </label>

            <textarea
              className="form-control"
              id="ShopComment"
              placeholder="Enter Comment if any..."
              rows="3"
            ></textarea>
          </div>
          {/* Shop Apointment Date */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopAppointmentDate">
              Shop Appointment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="ShopAppointmentDate"
              placeholder="Enter Shop Apointment Date"
            />
          </div>
          {/* Shop Time */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopAppointmentTime">
              Shop Appointment Date
            </label>
            <input
              type="text"
              className="form-control"
              id="ShopAppointmentTime"
              placeholder="Enter Shop Apointment Time"
            />
          </div>

          <div className="form-group" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ClientForm;
