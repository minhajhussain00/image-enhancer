import React from "react"
import ImagePreview from "../components/ImagePreview"
import ImageUpload from "../components/ImageUpload"
import { enhance } from "../api/enhance"


const Home = () => {
  const [isloading,setisloading] = React.useState(false)
  const [enhanced,setenhanced] = React.useState("")
  const [uploadedImage,setuploadedImage] = React.useState("")
  const uploadedImagehandler = async (image: File) => {
    setuploadedImage(URL.createObjectURL(image))
      setisloading(true)
    try {

      const enhancedUrl = await enhance(image)
      setisloading(false)
      setenhanced(enhancedUrl)
    } catch (error) {
      console.error("Error uploading image:", error)
      setisloading(false)
      alert("Error uploading image. Please try again.")
    }
  }
  return (
    <div>
        <ImageUpload Imagehandler={uploadedImagehandler} />
        <ImagePreview uploadedImage={uploadedImage} enhanced={enhanced} isloading={isloading} />
    </div>
  )
}

export default Home