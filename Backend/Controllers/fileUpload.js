const File = require("../Models/File");
const User = require("../Models/User");
const cloudinary = require("cloudinary").v2;

function extractPublicId(url) {
  const startIndex = url.indexOf("upload/") + "upload/".length;
  const endIndex = url.lastIndexOf(".");
  return url.substring(startIndex, endIndex);
}

function isSupportedFile(fileType, supportedTypes) {
  return supportedTypes.includes(fileType);
}

const uploadFileToCloudinary = async (file, folder) => {
  const options = { folder };
  options.resource_type = "auto";
  console.log("temp file path", file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

exports.imageUpload = async (req, res) => {
  try {
    // Data Fetch
    const userId = req.userId;
    const { tag } = req.body;
    const file = req.files["file"];

    // Validation
    const supportedTypes = ["jpg", "jpeg", "png", "heic"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isSupportedFile(fileType, supportedTypes)) {
      return res.status(415).json({
        success: false,
        message: "Unsupported Media Type",
      });
    }

    // Fetch the user document
    let user = await User.findById(userId).populate("files");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const userFiles = user.files;

    // Remove existing file if tag is "profile" or "header"
    if (tag == "profile" || tag == "header") {
      const existingFile = userFiles.find((obj) => obj.tag === tag);
      if (existingFile) {
        try {
          const publicId = extractPublicId(existingFile.url);
          await cloudinary.uploader.destroy(publicId);
          await File.deleteOne({ _id: existingFile._id });
          // Remove the deleted file from user's files array
          user = await User.findByIdAndUpdate(
            userId,
            { $pull: { files: existingFile._id } },
            { new: true }
          );
        } catch (error) {
          console.error("Error deleting existing file:", error);
          return res.status(500).json({
            success: false,
            message: "Error deleting existing file",
          });
        }
      }
    }

    // Upload new file to Cloudinary
    console.log("Uploading to Cloudinary");
    const response = await uploadFileToCloudinary(file, "Images");
    console.log(response);

    // Create new file document
    const fileData = await File.create({
      user: userId,
      tag,
      url: response.secure_url,
    });

    user.files.push(fileData);
    await user.save();

    // Fetch updated user details
    user = await User.findById(userId).populate("files");

    res.json({
      success: true,
      url: response.secure_url,
      userFiles: user.files,
      message: "Image Uploaded Successfully",
    });
  } catch (error) {
    console.error("Error occurred while uploading image", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
