import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {

  const navigate = useNavigate();

  return (
    <div className="p-10 text-slate-500">
      <div className="overflow-x-auto">
        <table className="min w-full table-auto border border-slate-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b max-sm:hidden text-left">#</th>
              <th className="px-4 py-2 border-b text-left">Job Title</th>
              <th className="px-4 py-2 border-b max-sm:hidden text-left">
                Date
              </th>
              <th className="px-4 py-2 border-b max-sm:hidden text-left">
                Location
              </th>
              <th className="px-4 py-2 border-b text-center">Applicants</th>
              <th className="px-4 py-2 border-b text-center">Visible</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {manageJobsData.map((job, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td className="px-4 py-2 border-b max-sm:hidden text-left">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-b text-left">{job.title}</td>
                <td className="px-4 py-2 border-b max-sm:hidden text-left">
                  {moment(job.date).format("ll")}
                </td>
                <td className="px-4 py-2 border-b max-sm:hidden text-left">
                  {job.location}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {job.applicants}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <input className="mr-2 accent-blue-500" type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-5">
        <button onClick={() => navigate('/dashboard/add-job')} className="bg-blue-500 text-white px-4 py-2 rounded">Add New Job</button>
      </div>
    </div>
  );
};

export default ManageJobs;
