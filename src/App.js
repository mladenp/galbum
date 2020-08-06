import React, {useState, useEffect} from "react"
import "./App.css"

const API_KEY = "AIzaSyCBbdr3PXFQ0_-fQve7hLwh5_dbPWyzva8"
const CLIENT_ID = "662849664251-0nko7svri1f0uf42urrjjuf37kapr1ml.apps.googleusercontent.com"
const SCOPES = "https://www.googleapis.com/auth/photoslibrary"
let gapi = window.gapi;

function App() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    console.log('albums', albums)
  }, [albums])

  const requestLogin = () => {
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPES,
    }).then(() => {
      gapi.auth2.getAuthInstance().signIn().then((data) => {
        const {access_token} = data.wc
        const name = data.Ot.Cd
        // localStorage.setItem('access_token', access_token)
        // gapi.client.setToken({ access_token: access_token})
        // console.log('tok',gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token)
        gapi.client.request('https://photoslibrary.googleapis.com/v1/albums')
          .then((albums) => {
            setAlbums(albums)
          })
      })
    }).then((res) => {
      console.log('res', res)
    })
  };

  const login = () => {
    gapi.load('client', requestLogin);
  }

  return (
    <div className='container'>
      <h1>gAlbum</h1>
      <button className='login' onClick={login}> Google Photos Login </button>
    </div>
  )
}

export default App
