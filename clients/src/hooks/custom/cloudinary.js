import {useEffect, useState} from 'react'
import axios from 'axios';

const useCloudinary = () => {
  
  const [file, setFiles] = useState(null);
  const [images, setImages] = useState([])
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dg7galjwj/image/upload'
  const CLOUDINARY_PRESET = 'xa8l6w7k'




  function addFiles(file){
    setFiles(file)
  }

  useEffect(()=>{
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_PRESET)
    if(file){
      axios.post(CLOUDINARY_URL, formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => console.log(response))
    }
  }, [file])


  return {
    addFiles,
    images
  }
}
export { useCloudinary };
