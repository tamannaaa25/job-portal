import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.company = await Company.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            console.error("Not authorized, token failed:", error);
            res.status(401).json({ success: false, message: "Not authorized, token failed" });
        }                       
    }

    if (!token) {
        res.status(401).json({ success: false, message: "Not authorized, no token" });
    }
};  