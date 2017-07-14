import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */

class Student extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { student } = this.props;
    return (
      <div>
        <div className="media">
          <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Campus</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <NavLink className="media-body"
                   activeClassName="active" to={`/students/${student.id}`}>
                  <h4 className="media-heading tucked">
                  <span placeholder="Jean Doe">{student.name}</span>
                  </h4>
                  </NavLink>
                </td>
                <td>
                  <h5 className="tucked">
                    <span>{student.campus}</span>
                  </h5>
                </td>
                  <NavLink className="media-body"
                   activeClassName="active" to={`/students/${student.id}`}>
                  <span className="glyphicon glyphicon-minus" >-</span>
                  </NavLink>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }

}

export default connect()(Student);
