const File = require('../Models/File');
const User = require('../Models/User');
const cloudinary = require('cloudinary').v2;

function isSupportedFile(fileType, supportedTypes){
    return supportedTypes.includes(fileType);
}

const uploadFileToCloudinary = async (file, folder) => {
    const options = { folder };
    options.resource_type = 'auto';
    console.log("temp file path", file.tempFilePath);
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
    try {
        // Data Fetch
        const userId = req.userId;
        const { tag } = req.body;
        const file = req.files.file;

        // Validation
        const supportedTypes = ['jpg', 'jpeg', 'png', 'heic'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isSupportedFile(fileType, supportedTypes)){
            res.status(415).json({
                success: false,
                message: "Unsupported Media Type",
            });
        }

        // Uploading
        console.log("Uploading to Cloudinary");
        const response = await uploadFileToCloudinary(file, "Images");
        console.log(response);

        // Entry in db
        const fileData = await File.create({
            user: userId,
            tag,
            url: response.secure_url,
        });
        const user = await User.findByIdAndUpdate(userId, { $push: {files: fileData._id}}, {new: true});

        res.json({
            success:true,
            url:response.secure_url,
            userFiles: user.files,
            message:'Image Uploaded Successfully', 
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error: While uploading image.",
        });
    }
}