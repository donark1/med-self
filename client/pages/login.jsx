import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
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
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <h4 className="login-input">Email:</h4><input type="text" id="email" name="email" defaultValue="demouser@abc.com" onChange={this.handleChange} disabled />
                  </div>
                  <div className="col-sm-6">
                    <h4 className="login-input">Password:</h4><input type="password" id="password" name="password" defaultValue="demouser" onChange={this.handleChange} disabled />
                  </div>
                </div>
                <div>
                  <button type="submit" className="login-submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
