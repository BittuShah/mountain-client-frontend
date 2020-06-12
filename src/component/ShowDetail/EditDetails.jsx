import React, { Component } from "react";
import axios from "axios";

class EditDetails extends Component {
  state = {
    shopId: null,
    shopName: "",
  };

  componentDidMount() {
    const shopName = sessionStorage.getItem("shopName");

    const shopId = sessionStorage.getItem("shopId");

    this.setState({ shopName, shopId });
  }

  editSubmitData = (e) => {
    e.preventDefault();

    const shopId = this.state.shopId;
    const shopComment = e.target.elements.ShopComment.value;
    const status = e.target.elements.orderStatus.value;

    axios
      .put("https://bluemountainproductions-client.herokuapp.com/api/contact", {
        id: shopId,
        shopComment: shopComment,
        status: status,
      })
      .then((response) => {
        this.props.history.push("/showdetails");
      })
      .catch((error) => {});
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="formTitle">{this.state.shopName}</h3>

        <hr className="titleLine" />

        <form className="formStyles" onSubmit={this.editSubmitData}>
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

          {/* Order Status */}

          <div className="form-group">
            <label htmlFor="orderStatus">Order Status</label>
            <select className="form-control" id="orderStatus">
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditDetails;
