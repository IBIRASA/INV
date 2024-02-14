import React, { useState } from "react";
import Sidebar2 from "../../Layouts/Sidebar2";
import Contents from "../Contents";
import "../../styles/dashbaord.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

function Upload() {
  const [files, setFiles] = useState([]);

  function handleChange(e) {
    const selectedFiles = Array.from(e.target.files);
  setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  }

  return (
    <div className="flex">
    <div className=" flex-none w-2/12 h-screen bg-gray-800 ">
    <Sidebar2 userRole={localStorage.getItem("role")} />
    </div>
    
      <div className="flex-grow dashboard-content shadow-2xl">
        <div className="users">
          <Contents />

        
<div className="bg-gray-100  h-screen-h ">   

<label htmlFor="fileInput" className="upload-button bg-gray-800 text-white rounded-md py-2 px-8 text-sm cursor-pointer mt-12 mb-4 ml-20" data-aos="zoom-in-down">
            <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />
            Upload File
          </label>
          
          <input type="file" id="fileInput" className="hidden " onChange={handleChange} multiple />
          
          <table className="finance-table mt-12">
            <thead>
              <tr data-aos="fade-up" className="bg-gray-800">
                <th>File Name</th>
              </tr>
            </thead>
            <tbody>
              {files.length > 0 ? (
                files.map((file, index) => (
                  <tr key={index} data-aos="zoom-in-down">
                    <td><a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">{file.name}</a></td>
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
    </div>
  );
}

export default Upload;
