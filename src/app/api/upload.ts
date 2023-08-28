// pages/api/upload-image.js
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  destination: "public/images", // Set your desired destination folder
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export default async (req:any, res:any) => {
  try {
    await upload.single("image")(req, res, (error) => {
      if (error) {
        return res.status(500).json({ error: "Image upload failed" });
      }
      const imageUrl = `/images/${req.file.filename}`;
      return res.status(201).json({ imageUrl });
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Image upload failed" });
  }
};
