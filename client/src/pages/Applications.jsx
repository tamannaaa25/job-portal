import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, JobData } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label
                className="flex items-center cursor-pointer"
                htmlFor="resumeUpload"
              >
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  Select Resume
                </span>
                <input
                  id="resumeUpload"
                  name="resume"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                  hidden
                />
                <input
                  id="logoUpload"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setLogoFile(e.target.files[0])}
                  hidden
                />

                <img
                  src={assets.profile_upload_icon}
                  alt="Upload Icon"
                  className="ml-2 w-5 h-5"
                />
              </label>

              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-100 border border-green-400 text-green-700 
             rounded-lg px-4 py-2 text-sm font-medium 
             hover:bg-green-200 transition inline-block"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href={resume || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left">Company</th>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b text-center max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b text-center max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {JobData.map((job, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="py-3 px-4 border-b flex items-center gap-2 text-left">
                  <img
                    className="w-8 h-8"
                    src={assets.company_icon}
                    alt="Company"
                  />
                  {job.company}
                </td>
                <td className="py-2 px-4 border-b text-left">{job.title}</td>
                <td className="py-2 px-4 border-b text-center max-sm:hidden">
                  {moment(job.date).format("DD-MM-YYYY")}
                </td>
                <td className="py-2 px-4 border-b text-center max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <span
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium
              ${job.status === "Accepted" ? "bg-green-100 text-green-800" : ""}
              ${job.status === "Pending" ? "bg-yellow-100 text-yellow-800" : ""}
              ${job.status === "Rejected" ? "bg-red-100 text-red-800" : ""}
            `}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
