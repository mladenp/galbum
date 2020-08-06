import React, {useState, useEffect} from "react"
import "./App.css"
import Album from "./Album";
import useScript from './useScript'

const API_KEY = "AIzaSyCBbdr3PXFQ0_-fQve7hLwh5_dbPWyzva8"
const CLIENT_ID = "662849664251-0nko7svri1f0uf42urrjjuf37kapr1ml.apps.googleusercontent.com"
const SCOPES = "https://www.googleapis.com/auth/photoslibrary"

function Home() {

  const [loaded] = useScript('https://apis.google.com/js/api.js')
  const [gapi, setGapi] = useState(null)
  const [albums, setAlbums] = useState([]);
  const [profile, setProfile] = useState({name: null});

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    if(loaded) {
      setGapi(window.gapi)
      initGapi()
    }

  }, [loaded])

  useEffect(() => {
    console.log('albums', albums)
  }, [albums])



  const initGapi = () => {
    console.log('window', window.gapi)
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPES,
    }).then(() => {
      console.log('gapi init')
      setGapi(true)
    })
  };

  const requestLogin = () => {
    gapi.auth2.getAuthInstance().signIn().then((data) => {
      const {access_token} = data.wc;
      // gapi.client.setToken({access_token: token})
      // localStorage.setItem('access_token', access_token);
      const name = data.Ot.Cd
      setProfile({name: name})
      getAlbums()
    })
  }

  const getAlbums = () => {
    // localStorage.setItem('access_token', access_token)
    // console.log('tok',gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token)

    gapi.client.request('https://photoslibrary.googleapis.com/v1/albums')
      .then((data) => {
        setAlbums(data.result.albums)
      })
  }


  return (
    <div className='container'>
      <h1>gAlbum</h1>
      {!token && <button className='login' onClick={requestLogin}> Google Photos Login</button>}
      <div className='avatar'> {profile.name} </div>
      {albums.length ? albums.map(album => <Album data={album}/>) : null}

    </div>
  )
}

export default Home
