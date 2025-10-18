import express from 'express';
import multer from 'multer';
import { registerCompany, loginCompany, getCompanyData, postJob, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationStatus, changeVisibilty } from '../controllers/companyController.js';

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

// Now use `upload` in the register route
router.post('/register', upload.single('image'), registerCompany);
router.post('/login', loginCompany);
router.get('/data', getCompanyData);
router.post('/post-job', postJob);
router.get('/applicants', getCompanyJobApplicants);
router.get('/listed-jobs', getCompanyPostedJobs);
router.post('/change-status', ChangeJobApplicationStatus);
router.post('/change-visibility', changeVisibilty);

export default router;
