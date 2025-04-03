import Loader from "./Loader"


const ImagePreview = ({uploadedImage,isenhanced,isloading}:{uploadedImage:string,isenhanced:string,isloading:boolean}) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                    Original Image
                </h2>
                {uploadedImage ? (
                    <img
                        src={uploadedImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Image Selected
                    </div>
                )}

</div>
<div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
                    Enhanced Image
                </h2>

                {isenhanced && !isloading && (
                    <img
                        src={isenhanced}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                )}

                {isloading ? (
                    <Loader />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Enhanced Image
                    </div>
                )}
            </div>
    </div>
  )
}

export default ImagePreview