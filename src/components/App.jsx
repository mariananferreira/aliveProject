import React, { useState } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

export function App() {
  const defaultSrc =
    'https://res.cloudinary.com/olanetsoft/image/upload/v1648679302/uploadedFiles/family.jpg'

  const [image, setImage] = useState(defaultSrc)
  const [cropData, setCropData] = useState('')
  const [cropper, setCropper] = useState(null)

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL())
    }
  }
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div>
      <div className="splitdiv" id="leftdiv">
        <h1 className="main-h1">
          How to Crop and Resize Image in the Browser using CropperJs
        </h1>
        <div id="leftdivcard">
          <input type="file" onChange={onChange}/>

          &nbsp; &nbsp;
          <button onClick={getCropData} type="button" id="leftbutton">
            Crop Image
          </button>
          <Cropper
            className="cropper"
            zoomTo={0.5}
            initialAspectRatio={1}
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance)
            }}
            guides={true}
          />
        </div>
      </div>
      <div className="splitdiv" id="rightdiv">
        <div id="itemdivcard">
          {cropData ? (
            <img style={{ height: '50%' }} src={cropData} alt="cropped" />
          ) : (
            <h1>Cropped image will apear here!</h1>
          )}{' '}
        </div>
      </div>
    </div>
  )
}
