import Company from "../models/Company.js";

import bcrypt from "bcryptjs";

export const registerCompany = async (req, res) => {
    const { name, email, image, password } = req.body;
    const imageFile = req.file;

    if(!name || !email || !password || !imageFile) {
        return res.json({ success: false, message: "All fields are required" });
    }


    try{
        const companyExists = await Company.findOne({email})

        if(companyExists){
            return res.json({ success: false, message: "Company already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    }    
    catch(error){
        console.error("Error registering company:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
        
};

export const loginCompany = async (req, res) => {
    const { email, password } = req.body;
};

export const getCompanyData = async (req, res) => {
    const companyId = req.params.id;
};

export const postJob = async (req, res) => {
    const { title, description, requirements, location } = req.body;
};

export const getCompanyJobApplicants = async (req, res) => {
    const jobId = req.params.id;
};

export const getCompanyPostedJobs = async (req, res) => {
    const companyId = req.params.id;
};

export const ChangeJobApplicationStatus = async (req, res) => {
    const { jobId, status } = req.body;
};

export const changeVisibilty = async (req, res) => {
    const { jobId, visibility } = req.body;
};
