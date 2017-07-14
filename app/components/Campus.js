import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCampus} from '../redux/eachCampus';

class Campus extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getCampus(this.props.match.params.id);
  }

  render () {
    return (
      <div>On Campus</div>
    );
  }
}

const mapToState = (state) => ({
  campus: state.eachCampus
})

const mapDispatch = dispatch => ({
  getCampus(id) {
    dispatch(fetchCampus(id));
  }
});

export default connect(mapToState, mapDispatch)(Campus);
