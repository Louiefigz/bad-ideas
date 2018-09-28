import UserApi from './AuthApi';



export function loginUser(credentials, history, redirect) {
    return (dispatch)=> {
        
        return UserApi.signin(credentials)
            .then(response => {
                dispatch({
                    type: 'SUCCESS', 
                    payload: response
                })
                history.push(redirect);
            }).catch(error =>{

            })
    }
}

export function logOut(history, redirect) {
    return (dispatch)=> {
        return UserApi.signOut()
            .then( response =>{
                dispatch({
                    type: 'SIGN_OUT', 
                    payload: 'success'
                })
                history.push(redirect);
            }).catch( error =>{})
    }
}

export function currentUser(history, redirect) {
    return (dispatch)=> {
        return UserApi.currentUser()
            .then( response =>{
                //If we do have a response that is not null, 
                //set session to true
                if(response.username){
                    dispatch({
                        type: 'LOGGED_IN', 
                        payload: response
                    })
                }
                history.push(redirect);
            }).catch( error =>{})
    }
}


  // This page is meant to handle the Logic.



    //   return UserApi.signin(credentials)
        // .then(response => {
        //   if(response.jwt) {
        //     localStorage.setItem("jwt", response.jwt);
        //     localStorage.setItem("user", JSON.stringify({
        //       id: response.id, email: response.email, name: response.name,
        //     }));
        //     history.push(redirect)
        //     dispatch({
        //       type: 'SUCCESS',
        //       // response = {jwt: KEY, id: INT, email: STR, name: STR}
        //       payload: response,
        //     })
        //   }
        //   else {
        //     dispatch({
        //       type: 'FAILURE',
        //       //response = {"error":"Invalid username or password"}
        //       payload: response.errors,
        //       //this.props.user.error
        //     })
        //   }
        // })
        // .catch(error => {
        //   throw(error);
        // })