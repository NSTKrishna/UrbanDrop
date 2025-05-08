import React from "react";
import { useState } from "react";
import Footer from "../Home /Footer/Footer";
import { Weight } from "lucide-react";

const Service = () => {
  const [page, setPage] = useState(1);

  function Page() {
    setPage(page + 1);
  }

  function back() {
    setPage(page - 1);
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
    <div>
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
                        <div>
                          <></>
                          <label for="pickupCity">Pickup City</label>
                        </div>
                        <select name="pickupCity" id="pickupCity">
                          <option value="" disabled>
                            Select City
                          </option>
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
                          <option value="" disabled>
                            Select City
                          </option>
                          <option value="Pune">Pune</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Surat">Surat</option>
                          <option value="Indore">Indore</option>
                        </select>
                      </div>
                      <div>
                        <></>
                        <label for="Calendar">Pickup Date</label>
                      </div>
                      <input type="date" id="Calendar" />
                      <div>
                        <div>
                          <></>
                          <label for="weight">Weight (lbs)</label>
                        </div>
                        <input
                          type="text"
                          id="weight"
                          placeholder="Enter Weight"
                        />
                        <div>
                          <></>
                          <label for="text">Dimensions (L×W×H in inches)</label>
                        </div>
                        <input
                          type="text"
                          id="text"
                          placeholder="eg. 12x10x8"
                        />
                      </div>
                      <div>
                        <label for="description">Package Description</label>
                        <textarea
                          type="text"
                          id="description"
                          placeholder="brief description your shipment"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {page == 3 && (
                <div>
                  <h1>Contact Information</h1>
                  <p>Provide your contact details</p>
                  <div>
                    <div>
                      <div>
                        <label for="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label for="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="phone">Phone Number</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label for="address">Full Address</label>
                      <textarea
                        type="text"
                        id="address"
                        placeholder="Enter your Full address"
                      />
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div>
            <div>
              <button onClick={Page}>Next →</button>
            </div>
            <div>
              <button onClick={back}>Back →</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
