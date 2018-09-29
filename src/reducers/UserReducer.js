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
          return {...state, session: false, user: {}}
        case 'LOGGED_IN':
        // We will be checking if the user is currently logged in when we start the app. If there is now session previously, 
        // we are updating that session to be true.
       // TODO: add username and email into the session.
            if(!state.session){
                let username = action.payload.username;
                let email = action.payload.attributes.email;
                return {...state,
                    session: true
                  }
            }

          return {...state, session: false, user: {}}
        default:
          return state;
      }
  }
  
  export default UserReducer;