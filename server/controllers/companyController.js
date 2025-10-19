import Company from "../models/Company.js";
import bcrypt from "bcryptjs";
import cloudinary from "../config/cloudinary.js";
import { v2 as cloudinaryV2 } from 'cloudinary';

// Utility to generate JWT token (if you have one)
import generateToken from "../utils/generateToken.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  // Multer files
  const imageFile = req.files.image ? req.files.image[0] : null;
  const resumeFile = req.files.resume ? req.files.resume[0] : null;

  if (!name || !email || !password || !imageFile || !resumeFile) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const companyExists = await Company.findOne({ email });
    if (companyExists) {
      return res.status(400).json({ success: false, message: "Company already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Upload image and resume to Cloudinary
    const [imageUpload, resumeUpload] = await Promise.all([
      cloudinary.uploader.upload(imageFile.path, { folder: "company_images" }),
      cloudinary.uploader.upload(resumeFile.path, { folder: "resumes" })
    ]);

    // Create company
    const company = await Company.create({
      name,
      email,
      password: hashPassword,
      image: imageUpload.secure_url,
      resume: resumeUpload.secure_url
    });

    res.json({
      success: true,
      message: "Company registered successfully",
      company: {
        id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
        resume: company.resume
      },
      token: generateToken(company._id)
    });

  } catch (error) {
    console.error("Error registering company:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getCompanyData = async (req, res) => {
  try {
    // Example logic — adjust as needed
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found' });
    }
    res.status(200).json({ success: true, company });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};



export const loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body;

    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found' });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ success: true, token, company });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};



export const postJob = async (req, res) => {
    const { title, description, requirements, location, salary } = req.body;
    const companyId = req.company._id; // Assuming company is authenticated and ID is in req

    try {
        const job = await Job.create({
            company: companyId,
            title,
            description,
            requirements,
            location,
            salary
        });

        res.json({ success: true, message: "Job posted successfully", job });
    } catch (error) {
        console.error("Error posting job:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }

}

export const getCompanyJobApplicants = async (req, res) => {
    const companyId = req.company._id; // Assuming company is authenticated and ID is in req

    try {
        const jobs = await Job.find({ company: companyId }).populate('applicants');         
        res.json({ success: true, jobs });
    } catch (error) {
        console.error("Error getting company job applicants:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }

}

