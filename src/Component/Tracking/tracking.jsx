import React from "react";
import Footer from "../Home /Footer/Footer";
const tracking = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[500px] bg-blue-500 text-white flex-col">
        <div className="text-center py-10">
          <h1 className="font-extrabold text-[48px]">Track Your Shipment</h1>
          <p className="text-[20px]">
            Enter your tracking Id to get real-time updates on your shipment
          </p>
        </div>
        <div className="flex-start shadow-lg bg-white text-black p-5 rounded-lg w-[700px]">
          <h1 className="font-bold text-[27px] pt-5">Shipment Tracking</h1>
          <p className="text-[16px] text-zinc-500">Enter your tracking number below</p>
          <div className="flex flex-row py-5 gap-2">
            <input className='w-full border rounded p-2' type="text" placeholder="Enter tracking number (e.g., MH757888565)" />
            <button className="w-[130px] hover:bg-blue-600 hover:text-white rounded hover:scale-110 transition-all" >Track Order</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default tracking;
