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

export const fetchDetailRequest = () => ({
  type: FETCH_REQUEST,
});

export const fetchDetailsSuccess = (products) => ({
  type: FETCH_SUCCESS,
  payload: products,
});

export const fetchDetailFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const postProductsBegin = () => ({
  type: POST_REQUEST,
});

export const postProductsSuccess = (postData) => ({
  type: POST_SUCCESS,
  payload: postData,
});

export const postProductsFailure = (error) => ({
  type: POST_FAILURE,
  payload: error,
});

export const loaddingStart = () => ({
  type: LODDING_START,
});

export const loaddingStop = () => ({
  type: LODDING_STOP,
});
// ##################### then catch #######################3

export const getData = (dispatch, user) => {
  dispatch(fetchDetailRequest());
  // dispatch({type: LODDING_START});
  fetch(`https://www.instagram.com/${user}/?__a=1`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.graphql.user);
      dispatch(fetchDetailsSuccess(data.graphql.user));
    })
    .catch((e) => {
      dispatch(fetchDetailFailure(e));
    });
};

// ############################ try catch #####################
// export const getData = async (dispatch, user) => {
//   try {
//     dispatch(fetchDetailRequest());
//     const response = await fetch(`https://www.instagram.com/${user}/?__a=1`);
//     const data = await response.json();
//     console.log(data.graphql.user);
//     dispatch(fetchDetailSuccess(data.graphql.user));
//   } catch (error) {
//     console.log('error');
//     dispatch(Details(error));
//   }
// };

export const postData = (dispatch, email, password, onSuccess) => {
  dispatch(postProductsBegin());
  dispatch(loaddingStart());
  // dispatch({type: LODDING_START});
  const formdata = new FormData();
  formdata.append('first_name', 'title');
  formdata.append('last_name', 'title');
  formdata.append('email', email);
  formdata.append('password', password);
  fetch('http://eufonia.thesmartfreelancer.com/api/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'multipart/form-data',
    },
    body: formdata,
  })
    .then((response) => {
      response.json();
      console.log('res', response.status);

      if (response.status === 200) {
        alert('user registered successfully!');
        dispatch(postProductsSuccess());
        dispatch(loaddingStop());
        onSuccess();
      } else {
        alert('SOMETHING WENT WRONG !');
      }
    })
    .catch((e) => {
      dispatch(postProductsFailure(alert(e)));
      dispatch(loaddingStop());
    });
};
