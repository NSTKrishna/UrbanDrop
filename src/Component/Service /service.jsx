import React from "react";
import { useState } from "react";

const Service = () => {
  const [page, setPage] = useState(1);

  function Page() {
    setPage(page + 1);
  }

  const service_Type = [
    {
      id: 1,
      title: "Express Delivery",
      description: "Same-day or next-day delivery for urgent shipments",
    },
    {
      id: 2,
      title: "Standard Shipping",
      description: "2-3 business days delivery time",
    },
    {
      id: 3,
      title: "Heavy Cargo",
      description: "Specialized transportation for items over 500 lbs",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="border p-5 rounded-lg">
        <div className="text-center">
          <h1 className="text-[32px] font-bold">Book Your Shipment</h1>
          <p className="py-4 text-[18px] text-gray-500">
            Complete the form below to schedule your intercity delivery
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <form>
            {page == 1 && (
              <div>
                <h1>Select Service Type</h1>
                <p>Choose the type of transportation service you need</p>
                <div>
                  {service_Type.map((data) => (
                    <div key={data.id} className="flex items-center gap-5">
                      <input type="radio" name="data" value={data.title} />
                      <div>
                        <label>{data.title}</label>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {page == 2 && (
              <div>
                <h1>Shipment Information</h1>
                <p>Provide information about your shipment</p>
                <div>
                  <div>
                    <div>
                      <></>
                      <label for='pickupCity'>Pickup City</label>
                    </div>
                    <select name="pickupCity" id="pickupCity">
                      <option value="" disabled>Select City</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Surat">Surat</option>
                      <option value="Indore">Indore</option>
                    </select>
                    <div>
                      <></>
                      <label>Delivery City</label>
                    </div>
                    <select name="pickupCity" id="pickupCity">
                      <option value="" disabled>Select City</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Surat">Surat</option>
                      <option value="Indore">Indore</option>
                    </select>
                    <div>
                      <></>
                      <label for="Calendar">Pickup Date</label>
                    </div>
                    <input type='date' id='Calendar' />
                    
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div>
          <button onClick={Page}>Next →</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
