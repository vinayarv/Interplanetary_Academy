import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class Campuses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const campuses = this.props.campuses;
    return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <Link className="thumbnail" to={`/campus/${campus.id}`}>
                <img src={ campus.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses })

export default connect(mapState)(Campuses);
