const BASE_URL = "https://techhk.aoscdn.com"
const API_KEY ="YOUR_PIXWISH_API"
const MAXIMUM_RETRIES = 20;
export const enhance = async (image: File) => {

    try {
        const taskId =await uploadedImage(image) 
        const enhancedImageData = await PollForEnhancedImage(taskId);

        return enhancedImageData;

    } catch (error) {
        console.error("Error enhancing image:", error)
        throw error
    }
}
const uploadedImage = async (Image: File) => {
    const formData = new FormData()
    formData.append("image_file", Image)
    const response = await fetch(`${BASE_URL}/api/tasks/visual/scale`, {
        headers:{
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
        method: "POST",
        body: formData,
    })
    const responseData = await response.json();
    if (!responseData?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }
    return responseData.task_id;
}

const fetchImage = async (taskId: string) => {
    const response = await fetch(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY,
        },
        method:"GET"
    })
    const responseData = await response.json();
    if (!responseData?.data) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
    }
    return responseData?.data
}

const PollForEnhancedImage = async (taskId:string, retries = 0) => {
    const result = await fetchImage(taskId);

    if (result.state === 4) {
        
        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("Max retries reached. Please try again later.");
        }

  
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return PollForEnhancedImage(taskId, retries + 1);
    }

    console.log("Enhanced Image URL:", result);
    return result;
};