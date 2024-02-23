const cloudinary = require("cloudinary").v2;

require("dotenv").config();
exports.cloudinaryConnect = () => {
    try{
            cloudinary.config({
                cloud_name:process.env.CLOUD_NAME,
                api_key: process.env.CLOUD_API_KEY,
                api_secret: process.env.CLOUD_API_SECRET,
            })
    }
    catch(error) {
        console.log(error);
    }
}