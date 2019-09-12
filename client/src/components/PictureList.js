import React from 'react';
import '../styles/picturelist.css';

const PictureList = (props) => {
  const pictures = props.images.map(({ id, urls, description }) => {
    return <img className="img_size" alt={description} key={id} src={urls.regular} />
  }) ;

  return (
    <div id="list">
      {pictures}
    </div>
  )
}

export default PictureList;