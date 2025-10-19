import express from "express";
import multer from "multer";
import {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  getCompanyPostedJobs,
  changeVisibility,
} from "../controllers/companyController.js";
import { protectCompany } from "../middlewares/authMiddleware.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });
const uploadSingle = upload.single("image");

const router = express.Router();

router.post("/register", uploadSingle, registerCompany);
router.post("/login", loginCompany);
router.post("/company", protectCompany, getCompanyData);
router.post("/postJob", protectCompany, postJob);
router.get("/list-jobs", protectCompany, getCompanyPostedJobs);
router.post("/change-visibility", protectCompany, changeVisibility);

export default router;
