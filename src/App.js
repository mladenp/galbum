import React from "react"
import "./App.css"

const API_KEY = "AIzaSyCBbdr3PXFQ0_-fQve7hLwh5_dbPWyzva8"
const CLIENT_ID = "662849664251-0nko7svri1f0uf42urrjjuf37kapr1ml.apps.googleusercontent.com"
const SCOPE = "https://www.googleapis.com/auth/photoslibrary.readonly"
let gapi = window.gapi;

function App() {

  function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPE,
    }).then(function () {
      // return gapi.client.request({
      //   'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
      // })
      console.log('signin')
      gapi.auth2.getAuthInstance().signIn()
    }).then(function (response) {
      console.log(response.result);
    }, function (err) {
      console.log('Error: ', err);
    });
  };

  gapi.load('client', start);
  return <></>
}

export default App
