import Company from "../models/Company.js";
import Job from "../models/Job.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary.js";
import generateToken from "../utils/generateToken.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file; // single file

  if (!name || !email || !password || !imageFile) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const companyExists = await Company.findOne({ email });
    if (companyExists) {
      return res
        .status(400)
        .json({ success: false, message: "Company already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      folder: "company_images",
    });

    const company = await Company.create({
      name,
      email,
      password: hashPassword,
      image: imageUpload.secure_url,
    });

    res.json({
      success: true,
      message: "Company registered successfully",
      company: {
        id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    console.error("Error registering company:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body;
    const company = await Company.findOne({ email });
    if (!company)
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });

    const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ success: true, token, company });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getCompanyData = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company)
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });

    res.status(200).json({ success: true, company });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const postJob = async (req, res) => {
  const { title, description, location, salary, level, category, visible } =
    req.body;
  const companyId = req.company._id;

  try {
    const job = await Job.create({
      company: companyId,
      title,
      description,
      date: Date.now(),
      location,
      salary,
      level: level || "Not Specified",
      category: category || "Not Specified",
      visible: visible ?? true,
    });

    res.json({ success: true, message: "Job posted successfully", job });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getCompanyPostedJobs = async (req, res) => {
  try {
    const companyId = req.company._id;
    const jobs = await Job.find({ company: companyId });
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const changeVisibility = async (req, res) => {
  try {
    const { jobId, visibility } = req.body;
    const job = await Job.findById(jobId);
    if (!job)
      return res
        .status(404)
        .json({ success: false, message: "Job not found" });

    job.visible = visibility;
    await job.save();

    res.status(200).json({ success: true, message: "Job visibility updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
