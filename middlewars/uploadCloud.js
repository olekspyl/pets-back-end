const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

console.log("CLOUDINARY_NAME", CLOUDINARY_NAME);
console.log("CLOUDINARY_KEY", CLOUDINARY_KEY);
console.log("CLOUDINARY_SECRET", CLOUDINARY_SECRET);

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "avatars",
//     format: async (req, file) => "png", // supports promises as well
//     public_id: (req, file) => "computed-filename-using-request",
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatars",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
