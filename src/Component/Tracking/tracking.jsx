import React from "react";

const tracking = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[300px] bg-blue-500 text-white flex-col">
        <div className="text-center">
          <h1>Track Your Shipment</h1>
          <p>
            Enter your tracking Id to get real-time updates on your shipment
          </p>
        </div>
        <div className="flex-start shadow-lg bg-white text-black p-5 rounded-lg w-[700px]">
          <h1>Shipment Tracking</h1>
          <p>Enter your tracking number below</p>
          <div className="flex flex-row gap-2">
            <input className='w-full' type="text" placeholder="Enter your tracking number" />
            <button>Track</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tracking;
