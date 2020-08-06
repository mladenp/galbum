import React, {useState} from 'react'
import {A} from 'hookrouter';

function AlbumSingle(props) {
  const [images, setImages] = useState([])

  console.log('props', props)

  return(
    <div>
      <h2>Album name:</h2>
      <h1>{}</h1>
    </div>
  )
}

export default AlbumSingle
