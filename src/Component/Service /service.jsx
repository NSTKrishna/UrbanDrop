import React, { useState } from "react";

const Service = () => {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

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

  const handleConfirm = () => {
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 900 + 100)}`,
      tracking: `SWS${Math.floor(Math.random() * 1e12)}`,
      service: select,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      from: pickupCity,
      to: deliveryCity,
      status: "In Transit",
      price: `$${Math.floor(Math.random() * 200 + 50)}.00`,
    };

    const existing = JSON.parse(localStorage.getItem("orders")) || [];
    existing.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existing));

    setPage(5);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="border p-5 rounded-lg w-full max-w-xl bg-white shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-[28px] font-bold">Book Your Shipment</h1>
          <p className="py-2 text-[16px] text-gray-500">
            {page <= 4
              ? "Complete the form to schedule your delivery"
              : "Confirmation"}
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {page === 1 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Select Service Type</h2>
              <p className="text-sm mb-4 text-gray-600">
                Choose the type of transportation service you need
              </p>
              <div className="space-y-3">
                {service_Type.map((data) => (
                  <div
                    key={data.id}
                    className="flex items-start gap-3 px-3 py-2 border rounded"
                  >
                    <input
                      type="radio"
                      name="service"
                      value={data.title}
                      onChange={(e) => setSelect(e.target.value)}
                      required
                    />
                    <div>
                      <label className="text-[16px] font-medium">
                        {data.title}
                      </label>
                      <p className="text-gray-600 text-sm">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Shipment Information</h2>
              <div>
                <label htmlFor="pickupCity" className="block font-medium">
                  Pickup City
                </label>
                <select
                  id="pickupCity"
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                >
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
                <label htmlFor="deliveryCity" className="block font-medium">
                  Delivery City
                </label>
                <select
                  id="deliveryCity"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                >
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
                <label htmlFor="pickupDate" className="block font-medium">
                  Pickup Date
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="weight" className="block font-medium">
                  Weight (lbs)
                </label>
                <input
                  type="text"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter weight"
                />
              </div>

              <div>
                <label htmlFor="dimensions" className="block font-medium">
                  Dimensions (L×W×H)
                </label>
                <input
                  type="text"
                  id="dimensions"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                  placeholder="e.g., 12x10x8"
                />
              </div>

              <div>
                <label htmlFor="description" className="block font-medium">
                  Package Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Brief description"
                />
              </div>
            </div>
          )}

          {page === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact Information</h2>

              <div>
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="address" className="block font-medium">
                  Full Address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>
          )}

          {page === 4 && (
            <div>
              <h2 className="text-lg font-semibold mb-3">Review & Confirm</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Service Type:</strong> {select}</p>
                <p><strong>From:</strong> {pickupCity}</p>
                <p><strong>To:</strong> {deliveryCity}</p>
                <p><strong>Pickup Date:</strong> {pickupDate}</p>
                <p><strong>Weight:</strong> {weight}</p>
                <p><strong>Dimensions:</strong> {dimensions}</p>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Address:</strong> {address}</p>
              </div>
            </div>
          )}

          {page === 5 && (
            <div className="text-center py-10">
              <h2 className="text-xl font-bold text-green-600 mb-2">
                Booking Successful!
              </h2>
              <p className="text-gray-600">
                Your shipment has been booked. You can track it in the orders page.
              </p>
            </div>
          )}

          {page < 5 && (
            <div className="flex justify-between mt-6 text-blue-500">
              <button
                type="button"
                onClick={prevPage}
                disabled={page === 1}
                className={`text-sm ${page === 1 ? "text-gray-300" : ""}`}
              >
                ← Back
              </button>

              {page < 4 ? (
                <button
                  type="button"
                  onClick={nextPage}
                  className="text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Service;
