import ImagePreview from "../components/ImagePreview"
import ImageUpload from "../components/ImageUpload"


const Home = () => {
  return (
    <div>
        <ImageUpload/>
        <ImagePreview uploadedImage="some image.png" isenhanced={"asdf"} isloading={false} />
    </div>
  )
}

export default Home