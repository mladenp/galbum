import React from 'react'
import {A} from 'hookrouter';

function Album(props) {
  const { title, id, coverPhotoBaseUrl } = props.data
  return(
    <A href={id}>
      <div>{title}</div>
      <img src={coverPhotoBaseUrl} alt='album cover' />
    </A>
  )
}

export default Album
