import { Auth } from "aws-amplify";


class UserApi {
    static signin(credentials) {
        return Auth.signIn(credentials.email, credentials.password)
            .then( response =>  {
                return response                
            }).catch(error =>{
            })
    }
    static signOut() {
        return Auth.signOut()
    }
    static currentUser() {
        return Auth.currentSession()
            .then( response => {
                debugger
                return response
            }).catch(error =>{
                debugger
            })
    }
}
export default UserApi;



//Example of how to use this file to make service calls

  //   const request = new Request(API_URL+'signin', {
    //     method: 'POST',
    //     headers: new Headers({
    //       'Content-Type': 'application/json'
    //     }),
    //     body: JSON.stringify({login: credentials})
    //   });
  
    //   return fetch(request)
    //     .then(response => response.json())
    //     .catch(error => {
    //       return error;
    //     })