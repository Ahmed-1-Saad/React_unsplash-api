import ImageShow from './ImageShow'


const ImageList = ({images}) => {


  const renderImage = images.map((image)=>{
    return<ImageShow key={image.id} image={image}/>
  });

  return<div>{renderImage}</div>
}

export default ImageList;
