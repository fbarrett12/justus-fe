// API CONTSTANTS

const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const CAUSE_URL = BASE_URL + '/causes'
const PERSIST_URL = BASE_URL + '/auth';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// REDUX ACTIONS

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
  });

  const clearUserAction = () => ({
    type: 'CLEAR_USER'
  })

  const selectCause = cause => ({
    type: 'SET_CURRENT_CAUSE',
    payload: cause
  })

  const clearSelectedCause = () => ({
    type: 'CLEAR_CURRENT_CAUSE'
  })

  const loadCauses = causes => ({
    type: 'LOAD_CAUSES',
    payload: causes
  })

  // FETCH

  const getCauses = () => dispatch => {
    fetch(CAUSE_URL)
    .then(res => res.json())
    .then((response) => {
      console.log(response)
      dispatch(loadCauses(response.data))
    })
  }

  const newUserToDB = (userObj, url) => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    }
    fetch(url, config)
      .then(r => r.json())
      .then(data => {
        dispatch(setUserAction(data))
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', data.role)
      })
  }
  
  const deleteUserFromDB = userId => dispatch => {
    const config = {
      method: 'DELETE'
    }
    fetch(SPECIFIC_USER_URL(userId), config).then(r => {
      dispatch(clearUserAction())
      localStorage.clear()
    })
  }
  
  
  const loginUserToDB = userCredentials => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    fetch(LOGIN_URL, config)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        dispatch(setUserAction(data))
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', data.role)
      })
  }
  
  const persistUser = () => dispatch => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `bearer ` + localStorage.token
      }
    }
    fetch(PERSIST_URL, config)
      .then(r => r.json())
      .then(userInstance => {    
        dispatch(setUserAction(userInstance))
        localStorage.setItem('role', userInstance.role)
      })
  }
  
  const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
  }

  export default {
    newUserToDB,
    deleteUserFromDB,
    loginUserToDB,
    persistUser,
    logoutUser,
    getCauses,
    selectCause,
    clearSelectedCause
  }