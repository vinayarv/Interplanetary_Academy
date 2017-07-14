import axios from 'axios';

const GET_CAMPUS = 'GET_CAMPUS';

const getCampus = campus => ({type: GET_CAMPUS, campus});

export default function reducer (campus = [], action){
  switch (action.type) {

    case GET_CAMPUS:
      return action.campus;

    default:
      return campus;
  }
}

export const fetchCampus = id => dispatch => {
  axios.get(`/api/campus/${id}`)
       .then(res => res.data)
       .then(campus => dispatch(getCampus(campus)));
};
