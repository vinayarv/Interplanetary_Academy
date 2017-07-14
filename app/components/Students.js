import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from './Student';

/* -----------------    COMPONENT     ------------------ */

class Students extends Component {
  constructor(props) {
    super(props);

  }

    filterStudent(student) {
    const nameMatch  = new RegExp(this.state.name, 'i');
    const emailMatch = new RegExp(this.state.email, 'i');

    return nameMatch.test(student.name)
        && emailMatch.test(student.email)
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="user-list">
        {
          this.props.students
            .map(student => <Student student={student} key={student.id} />)
        }
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students }) => ({ students })

export default connect(mapState)(Students);
