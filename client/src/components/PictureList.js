import React from 'react';
import PictureCard from './PictureCard';
import '../styles/picturelist.css';

const PictureList = (props) => {
  const pictures = props.images.map((image) => {
    return <PictureCard  key={image.id} image={image} />
  }) ;

  return (
    <div className="list">
      {pictures}
    </div>
  )
}

export default PictureList;