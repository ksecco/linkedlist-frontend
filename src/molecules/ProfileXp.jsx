import React, { Component } from "react";
import PropTypes from "prop-types";

class Xp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isAdding: false
    };
  }

  showAdd = e => {
    e.preventDefault();
    this.setState({ isAdding: !this.state.isAdding });
  };

  showEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const add = this.state.isEditing ? (
      <button onClick={this.showAdd}>+Add Experience</button>
    ) : (
      <br />
    );
    const newForm = this.state.isAdding ? (
      <form action="">
        <div>
          <input type="text" name="job" placeholder="Job Title" />
          <input type="text" name="Company" placeholder="Company" />
        </div>
        <div>
          <label htmlFor="start">Start</label>
          <input type="date" name="start" />
          <label htmlFor="end">End</label>
          <input type="date" name="end" />
        </div>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Describe your cod3 trickz"
        />
        <button type="submit">Submit</button>
      </form>
    ) : (
      <br />
    );
    const xps = this.props.userData.experience || [];
    const XpLi = xps.map(xp => <li>{xp}</li>);
    if (this.props.userName === this.props.userData.username) {
      return (
        <div>
          <div>
            <button>Hide</button>
            <i className="fas fa-briefcase" />
            <h2>Experience</h2>
            {add}
            <button onClick={this.showEdit}>Edit</button>
          </div>
          <ul>
            {newForm}
            {XpLi}
          </ul>
        </div>
      );
    } else
      return (
        <div>
          <div>
            <i className="fas fa-briefcase" />
            <h2>Experience</h2>
          </div>

          <ul>{XpLi}</ul>
        </div>
      );
  }
}
Xp.propTypes = {
  username: PropTypes.string
};

export default Xp;
