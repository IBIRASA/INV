import React, { useState } from "react";
import Sidebar2 from "../Layouts/Sidebar2";
import Contents from "./Contents";
import "../styles/dashbaord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

function Upload() {
  const [files, setFiles] = useState([]);

  function handleChange(e) {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  }

  return (
    <div className="dashboard">
      <Sidebar2 userRole={localStorage.getItem("role")} />

      <div className="dashboard-content shadow-2xl">
        <div className="w-full">
          <Contents />

          <label htmlFor="fileInput" className="upload-button bg-blue-900 text-white rounded-full py-2 px-8 text-sm cursor-pointer mt-8 mb-8 mr-20" data-aos="zoom-in-down">
            <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />
            Upload File
          </label>
          <input type="file" id="fileInput" className="hidden" onChange={handleChange} multiple />

          <table className="finance-table mt-28">
            <thead>
              <tr data-aos="fade-up" className="bg-blue-950">
                <th>File Name</th>
              </tr>
            </thead>
            <tbody>
              {files.length > 0 ? (
                files.map((file, index) => (
                  <tr key={index} data-aos="zoom-in-down">
                    <td>{file.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No files uploaded</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Upload;
