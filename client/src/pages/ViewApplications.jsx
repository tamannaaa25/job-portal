import React from "react";
import { assets, ViewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="p-10 text-slate-500">
      <div className="flex items-center gap-3 mb-10">
        <table
          border="1"
          cellPadding="8"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr className="bg-slate-200">
              <th className="p-2">#</th>
              <th className="p-2">User Name</th>
              <th className="p-2">Job Title</th>
              <th className="p-2">Location</th>
              <th className="p-2">Resume</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {ViewApplicationsPageData.map((applicant, index) => (
              <tr className="border-b" key={index}>
                <td className="p-2">{index + 1}</td>
                <td
                  className="p-2"
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    className="mr-2"
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="p-2">{applicant.jobTitle}</td>
                <td className="p-2">{applicant.location}</td>
                <td className="p-2">
                  <a href={applicant.resume} target="_blank" rel="noreferrer">
                    Resume
                    <img
                      className="mr-2"
                      src={assets.resume_download_icon}
                      alt="Download"
                      style={{ width: "16px", marginLeft: "6px" }}
                    />
                  </a>
                </td>
                <td className="py-2 px-4 border-b relative">
                  <div className="relative inline-block text-left group">
                    <button className="text-gray-500 action-button">
                      ...
                    </button>
                    <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
