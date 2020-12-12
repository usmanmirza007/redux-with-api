import {
  LODDING_START,
  LODDING_STOP,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
} from './../actions/ActionType';

const INITIAL_STATE = {
  loading: false,
  instagramData: [],
  error: null,
  postData: [],
  loading1: false,
};

const InstagramReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_REQUEST:
      return {
          ...state,
          loading: true,
          error: null
      };
    case FETCH_SUCCESS:
      return {
          ...state,
          loading: false,
          instagramData: action.payload
      };
    case FETCH_FAILURE:
      return {
          ...state,
          loading: false,
          error: action.payload.error
      };
    case POST_REQUEST:
      return {
          ...state,
          loading1: true,
          error: null
      };
    case POST_SUCCESS:
      return {
          ...state,
          loading1: false,
          postData: action.payload
      };
    case POST_FAILURE:
      return {
          ...state,
          loading: false,
          // error: action.payload.error
      };
    case LODDING_START:
      return {
        ...state,
        loading: true,
      };
    case LODDING_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default InstagramReducer;
