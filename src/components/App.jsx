import React, { useState, useRef } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { Container } from '@/components/Container'
import html2canvas from 'html2canvas'

export function App() {
  const defaultSrc =
    'https://media.discordapp.net/attachments/1008571235766116413/1113774049739423744/fran_grimaldi_1990_screengrab_of_Model_Harry_Potter_wearing_a_c_4464c326-2e12-42c6-8621-7dd3afb7eaaf.png?width=951&height=634'

  const [image, setImage] = useState(defaultSrc)
  const [cropData, setCropData] = useState('')
  const [cropper, setCropper] = useState(null)

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL())
    }
  }

  const handleDownloadImage = async () => {
    const element = document.getElementById('canvasShot'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a')

    link.href = data
    link.download = 'downloaded-image.jpg'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const onChange = (e) => {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <section id="App" aria-label="" className="lg:pb-24">
      <Container>
        <div className="splitdiv" id="leftdiv">
          <div id="leftdivcard">
            <input type="file" onChange={onChange} />
            &nbsp; &nbsp;
            <button
              onClick={getCropData}
              className="my-2	mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              type="button"
              id="leftbutton"
            >
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
              <div
                id="canvasShot"
                className="box-border"
                style={{ borderImage: "url('https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png') 30 fill /  30px / 30px space"}}
              >
                <img style={{ height: '50%' }} src={cropData} alt="cropped" />{' '}
              </div>
            ) : (
              <h1>Cropped image will apear here</h1>
            )}{' '}
          </div>
          <button onClick={handleDownloadImage}>Capture Div</button>
        </div>
      </Container>
    </section>
  )
}
