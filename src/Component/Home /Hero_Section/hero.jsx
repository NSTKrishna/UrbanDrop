import React from "react";
import { Clock, Truck, Package, Check } from "lucide-react";
import { Link } from "react-router-dom";
import transportImg from "../../../../assets/Transport.png";

const point = [
  {
    id: 1,
    title: "Nationwide Coverage",
    description: "Serving all major cities and regions across the country",
  },
  {
    id: 2,
    title: "Real-time Tracking",
    description: "Monitor your shipment status at any time",
  },
  {
    id: 3,
    title: "Secure Handling",
    description: "Your items are handled with care and security",
  },
  {
    id: 4,
    title: "Flexible Scheduling",
    description: "Choose pickup and delivery times that work for you",
  },
  {
    id: 5,
    title: "Professional Team",
    description: "Experienced staff dedicated to customer satisfaction",
  },
  {
    id: 6,
    title: "Competitive Pricing",
    description: "Cost-effective solutions for all your shipping needs",
  },
];
const service = [
  {
    id: 1,
    img: <Clock />,
    title: "Express Delivery",
    description: "Same-day or next-day delivery for urgent shipments",
  },
  {
    id: 2,
    img: <Truck />,
    title: "Standard Shipping",
    description: "Reliable and cost-effective shipping options",
  },
  {
    id: 3,
    img: <Package />,
    title: "Heavy Cargo",
    description: "Specialized transportation for large and heavy items",
  },
];
const hero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen px-6 py-10 bg-gradient-to-b from-blue-400 to-blue-800 text-white gap-10">
        <div className="space-y-6 shadow-2xl px-4 py-4 w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight ">
            Reliable Intercity Logistics Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            Fast, secure, and efficient transportation services for your
            business and personal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold text-center"
            >
              Book a Shipment →
            </Link>
            <Link
              to="/tracking"
              className="text-white border border-white px-4 py-2 rounded font-semibold text-center hover:bg-blue-100 hover:text-blue-7000"
            >
              Track Your Package
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={transportImg}
            alt="Logistics Illustration"
            className="w-full max-w-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center bg-gray-100 flex-col gap-10 px-4 py-12">
          <div className="text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl py-4">
              Our Transportation Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-700">
              Choose the service that best fits your logistics needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            {Object.values(service).map((k) => (
              <div
                key={k.id}
                className="w-[280px] h-[280px] shadow-lg flex flex-col justify-center items-center gap-4 px-3 py-4 bg-white rounded-lg transition duration-300 hover:scale-105"
              >
                <div className="text-blue-600">{k.img}</div>
                <h1 className="text-sm text-gray-600">{k.title}</h1>
                <p>{k.description}</p>
                <Link
                  to="/services"
                  className="hover:bg-blue-500 hover:text-[#FFEEC6] rounded px-1 text-[16px]"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gray-100 px-4 py-16 gap-6">
        <h1 className="font-extrabold text-4xl md:text-5xl">Why Choose Us</h1>
        <p className="text-lg md:text-2xl text-gray-600 text-center">
          We provide reliable and efficient logistics solutions
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {point.map((data) => (
            <div
              key={data.id}
              className="w-[280px] flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <h2 className="font-semibold text-blue-600 flex items-center gap-2">
                <Check className="text-blue-500" />
                {data.title}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default hero;
