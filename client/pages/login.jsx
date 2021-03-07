import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'demouser@abc.com',
      password: 'demouser'
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
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(loginUser);
  }

  render() {
    return (
      <>
        <div>
          <h1 className="text-center mt-4 logintitle">Login</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-4">
              <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImageLogin" />
            </div>
            <div className="col-4">
              <h4 className="login-input">Email:</h4><input type="text" id="email" name="email" onChange={this.handleChange} required />
            </div>
            <div className="col-4">
              <h4 className="login-input">Password:</h4><input type="text" id="password" name="password" onChange={this.handleChange} required />
            </div>
          </div>
          <div>
            <button type="submit" className="login-submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}
