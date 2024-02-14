import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chartt = () => {
  const data = {
    datasets: [
      {
        data: [300, 150, 50],
        backgroundColor: ["#1f3373", "#3a519e", "#cbd5e0"],
      },
    ],
  };

  const options = {
    cutout: "75%",
    text: "2-Pendings",
    textPosition: "center",
    textt: "40-Approved",
    texttt: "5-Removed",
    textFontColor: "#000",
  };

  return (
    <div className="flex flex-row justify-center items-center  mt-4">
      <div className="w-52 h-52 mr-20 relative">
        <Doughnut data={data} options={options} width={90} height={90} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-md text-gray-700 dark:text-gray-500 font-semibold ">
            {options.text}
          </span>
        </div>
      </div>
      <div className="w-52 h-52 mr-20  relative">
        <Doughnut data={data} options={options} width={90} height={90} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm text-gray-700 dark:text-gray-500 font-semibold">
            {options.textt}
          </span>
        </div>
      </div>
      <div className="w-52 h-52  relative">
        <Doughnut data={data} options={options} width={90} height={90} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-md text-gray-700 dark:text-gray-500 font-semibold">
            {options.texttt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chartt;
