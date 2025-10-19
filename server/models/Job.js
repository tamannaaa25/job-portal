import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  salary: { type: Number, required: true },
  date: { type: Date, required: true },
  visible: { type: Boolean, default: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  applicants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: { type: String, default: "Pending" }
    }
  ]
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
