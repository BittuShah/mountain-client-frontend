import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

class ClientForm extends Component {
  state = {
    isSubmitting: false,
  };

  submitData = (e) => {
    e.preventDefault();

    this.setState({ isSubmitting: true });

    const shopName = e.target.elements.ShopName.value;
    e.target.elements.ShopName.value = "";

    const shopEmail = e.target.elements.ShopEmail.value;
    e.target.elements.ShopEmail.value = "";

    const shopNumber = e.target.elements.ShopMobileNo.value;
    e.target.elements.ShopMobileNo.value = "";

    const shopAddress = e.target.elements.ShopAddress.value;
    e.target.elements.ShopAddress.value = "";

    const shopComment = e.target.elements.ShopComment.value;
    e.target.elements.ShopComment.value = "";

    const shopApDate = e.target.elements.ShopAppointmentDate.value;
    e.target.elements.ShopAppointmentDate.value = "";

    const shopApTime = e.target.elements.ShopAppointmentTime.value;
    e.target.elements.ShopAppointmentTime.value = "";

    const visitorName = e.target.elements.VisitorName.value;
    e.target.elements.VisitorName.value = "";

    const d = new Date();
    const todayDate = d.toLocaleDateString();

    // const endTimeValue = e.target.elements.toTime.value;
    const breakEndTimeString = new Date(`${todayDate} ${shopApTime}`);

    const endTime = breakEndTimeString.toLocaleTimeString();

    axios
      .post(
        "https://bluemountainproductions-client.herokuapp.com/api/contact",
        {
          shopName: shopName,
          shopEmail: shopEmail,
          shopNumber: shopNumber,
          shopAddress: shopAddress,
          shopComment: shopComment,
          appointmentDate: shopApDate,
          appointmentTime: endTime,
          visitorName: visitorName,
        }
      )
      .then((response) => {
        toast.success("Data Sent!");
        this.setState({ isSubmitting: false });
      })
      .catch((error) => {
        this.setState({ isSubmitting: false });
      });
  };

  render() {
    let btnTxt = this.state.isSubmitting ? "Sending" : "Send";

    return (
      <div className="container-fluid">
        <h3 className="formTitle">Client Infromation</h3>

        <hr className="titleLine" />

        <form onSubmit={this.submitData} className="formStyles">
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
              required
            />
          </div>
          {/* Shop Email */}
          <div className="form-group mb-4">
            <label className="inputLabel" htmlFor="ShopEmail">
              Shop Email address
            </label>
            <input
              type="text"
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
              required
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
              Shop Appointment Time
            </label>
            <input
              type="time"
              className="form-control"
              id="ShopAppointmentTime"
              placeholder="Enter Shop Apointment Time"
            />
          </div>

          {/* Visitor Name */}

          <div className="form-group">
            <label htmlFor="VisitorName">Visitor's Name</label>
            <select className="form-control" id="VisitorName">
              <option value="Sani Patel">Sani Patel</option>
              <option value="Jay Patel">Jay Patel</option>
              <option value="Nisarg Patel">Nisarg Patel</option>
              <option value="Pratik Panchal">Pratik Panchal</option>
              <option value="Parshv Shah">Parshv Shah</option>
            </select>
          </div>

          <div className="form-group" style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.isSubmitting}
            >
              {btnTxt}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ClientForm;
