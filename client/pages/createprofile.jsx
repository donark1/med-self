import React from 'react';

export default class Createprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      dateOfBirth: '',
      city: '',
      zipCode: '',
      height: '',
      weight: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      user: this.state
    };
    this.props.createProfile(newUser);
  }

  render() {
    return (
      <>
        <div>
          <h1 className="text-center mt-4 profiletitle">Create Your Profile</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-3">
              <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImageProfile" />
            </div>
            <div className="col-4">
              <h4 className="input">First Name:</h4> <input type="text" id="firstName" name="firstName" onChange={this.handleChange} required />
              <h4 c className="input">Last Name:</h4> <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required />
              <h4 c className="input">Email:</h4> <input type="text" id="email" name="email" onChange={this.handleChange} required />
              <h4 c className="input">Password:</h4> <input type="password" id="password" name="password" onChange={this.handleChange} required />
              <h4 c className="input">Gender:</h4> <input type="text" placeholder="M/F" id="gender" name="gender" onChange={this.handleChange} required />
            </div>
            <div className="col-4">
              <h4 c className="input">Date Of Birth:</h4> <input type="date" placeholder="mm/dd/yyyy" id="dateOfBirth" name="dateOfBirth" onChange={this.handleChange} required />
              <h4 c className="input">City:</h4> <input type="text" id="city" name="city" onChange={this.handleChange} required />
              <h4 c className="input">Zip Code:</h4> <input type="number" id="zipCode" name="zipCode" onChange={this.handleChange} required />
              <h4 c className="input">Height:</h4> <input type="number" placeholder="inches" id="height" name="height" onChange={this.handleChange} required />
              <h4 c className="input">Weight:</h4> <input type="number" placeholder="lbs" id="weight" name="weight" onChange={this.handleChange} required /><br></br>
            </div>
          </div>
        <div>
          <button type="submit" className="createbutton">CREATE</button>
        </div>
      </form>
    </>
    );
  }
}
