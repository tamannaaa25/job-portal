import express from 'express';
import multer from 'multer';
import { registerCompany, loginCompany, getCompanyJobApplicants, getCompanyData, postJob } from '../controllers/companyController.js';
import { protectCompany } from '../middlewares/authMiddleware.js';

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder to save uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const router = express.Router();

// Handle multiple file fields: image and resume
const uploadFields = upload.fields([
  { name: 'image', maxCount: 1 },  // company logo
  { name: 'resume', maxCount: 1 }  // resume
]);

// ✅ Register route
router.post('/register', uploadFields, registerCompany);

// ✅ Add Login route
router.post('/login', loginCompany);

router.post('/company' , protectCompany, getCompanyData);

router.post('/postJob', protectCompany, postJob);

router.get('/applicants', getCompanyJobApplicants);

export default router;
