import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Campus from './Campus';
// import StudentInfo from './StudentInfo';
import Campuses from './Campuses';
import history from './history';
import Students from './Students';
import Home from './Home';
import Root from './Root'
import { fetchStudents } from '../redux/student';
import { fetchCampuses } from '../redux/campus';

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/campus/:id" component={Campus} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Routes);

