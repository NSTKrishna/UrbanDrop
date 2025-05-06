import React from "react";

const footer = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col h-[300px] bg-blue-800 text-white border-b bg-gradient-to-b from-blue-400 to blue-800">
          <h1 className="font-extrabold text-[32px] py-1">
            Ready to Get Started?
          </h1>
          <p>
            Book your shipment today and experience our reliable logistics
            services
          </p>
          <div className="flex gap-5 py-5">
            <button className="hover:text-blue-600 hover:bg-white p-1 rounded border-2 border-white">
              Sign Up Free
            </button>
            <button className="hover:text-blue-600 hover:bg-white p-1 rounded border-2 border-white">
              Login In
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 text-white py-10 px-5 flex flex-col items-center">
        <p>© 2025 InterCity Logistics. All rights reserved.</p>
      </div>
    </div>
  )
};

export default footer;
