const initialState = {session: false,
    user: null,
    error: ""
  };

function UserReducer(state = initialState, action) {
      switch(action.type){
        case 'SUCCESS':
        let email = action.payload.signInUserSession.idToken.payload.email;
        let client_id = action.payload.signInUserSession.accessToken.payload.client_id; 
          return {...state,
              session: true,
              user: {
                id: client_id,
                email: email,
                name: action.payload.name,
              },
            }
        case 'FAILURE':
          return {...state, error: action.payload}
        case 'SIGN_OUT':
        debugger
          return {...state, session: false, user: {}}
        default:
          return state;
      }
  }
  
  export default UserReducer;