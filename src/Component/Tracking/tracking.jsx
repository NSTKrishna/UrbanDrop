import React, { useState } from "react";
import { api } from "./fakeapi";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const track = () => {
    setLoading(true);
    setError("");
    setShipment(null);

    api(trackingNumber)
      .then((data) => setShipment(data))
      .catch((er) => setError(er.message))
      .finally(() => setLoading(false));
  };
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
          <p className="text-[16px] text-zinc-500">
            Enter your tracking number below
          </p>
          <div className="flex flex-row py-5 gap-2">
            <input
              className="w-full border rounded p-2"
              type="text"
              placeholder="Enter tracking number (e.g., MH757888565)"
              onChange={(e) => {
                setTrackingNumber(e.target.value);
              }}
            />
            <button
              className="w-[130px] hover:bg-blue-600 hover:text-white rounded hover:scale-110 transition-all"
              onClick={track}
            >
              Track Order
            </button>
          </div>
          {loading && <p className="text-blue-500">Loading...</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {shipment && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-500 text-sm">Tracking Number</p>
                <p className="font-semibold">{shipment.tracking}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Status</p>
                <p className="font-semibold">{shipment.status}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Origin</p>
                <p className="font-semibold">{shipment.from}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Destination</p>
                <p className="font-semibold">{shipment.to}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Current Location</p>
                <p className="font-semibold">Warehouse</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Estimated Delivery</p>
                <p className="font-semibold">{shipment.deliveryDate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
