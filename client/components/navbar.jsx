import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav() {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    const { logout } = this.context;
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
                    <a href="/" onClick={this.handleNav} className="white">Home</a>
                  </li>
                  <li className="mt-2">
                    <a href="logout" onClick={logout} className="white">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <i className="fas fa-bars fa-2x white" onClick={this.handleNav}></i>
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
