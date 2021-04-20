import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      isLoggedIn: false
    };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav() {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    const isLoggedIn = this.props.value;

    if (this.state.sidebar) {
      return (
        <div>
          <nav className="navbar navbar-color navbar-height">
            <div className="sidebar-nav-on">
              <div className="row justify-content-end mt-3 mr-2">
                <i className="fas fa-times white" onClick={this.handleNav}></i>
              </div>
              <div className="mr-2">
                <ul>
                  <li>
                    <Link className="white" to="/">Home</Link>
                  </li>
                  <li>
                    {
                      isLoggedIn
                        ? <Link className="white" to="/logout">Logout</Link>
                        : <Link className="white" to="/login">Login</Link>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
    return (
      <div>
        <nav className="navbar navbar-color navbar-height d-flex position-relative ">
          <div className="sidebar"></div>
          <i className="fas fa-bars white fa-2x" onClick={this.handleNav}></i>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
