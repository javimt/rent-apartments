import { useEffect, useState } from 'react'
import axios from 'axios';

function useCloudinary(addUrl) {

  //const [file, setFiles] = useState(null);

  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL
  const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET
  

  function addFiles(file) {
    setFiles(file)
  }

  function uploadToCloudinary(file) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_PRESET)
    if (file) {
      axios.post(CLOUDINARY_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => addUrl(response.data.url))
        .catch(err => console.log(err))
        
    }
  }

  return {
    addFiles,
    uploadToCloudinary
  }

}
export default useCloudinary
