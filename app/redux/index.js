import { combineReducers } from 'redux';
import students from './student';
import campuses from './campus';
import eachCampus from './eachCampus';

export default combineReducers({ students, campuses, eachCampus });
