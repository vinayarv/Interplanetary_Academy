import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import history from './history';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="../../public/logo.png" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/campuses" activeClassName="active">Campus</NavLink>
              </li>
              <li>
                <NavLink to="/students" activeClassName="active">Student</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

export default withRouter(connect(mapProps)(Navbar));

