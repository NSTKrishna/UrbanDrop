import React from "react";
import { Clock, Truck, Package , Check } from "lucide-react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

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
      <div className="flex items-center justify-between w-full h-screen px-8 bg-gradient-to-b from-blue-400 to-blue-800 text-white">
        <div className="w-1/2 space-y-7 shadow-2xl px-4 py-4 w-[700px] bg-">
          <h1 className="text-4xl font-extrabold leading-tight ">
            Reliable Intercity Logistics Solutions
          </h1>
          <p className="text-lg text-gray-300">
            Fast, secure, and efficient transportation services for your
            business and personal needs.
          </p>
          <div className="flex gap-5">
            <Link
              to="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-3 rounded font-semibold"
            >
              Book a Shipment →
            </Link>
            <Link
              to="/tracking"
              className="text-white-500 px-3 py-3 rounded font-semibold hover:bg-blue-100 hover:text-blue-500"
            >
              Track Your Package
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img
            src="./../../assets/Transport.png"
            alt="Logistics Illustration"
            className="w-[90%] h-[90%] object-cover rounded-lg"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center h-[80vh] bg-gray-100 flex-col gap-10">
          <div className="text-center">
            <h1 className="font-extrabold text-7xl py-5">
              Our Transportation Services
            </h1>
            <p className="text-2xl">
              Choose the service that best fits your logistics needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 text-center ">
            {Object.values(service).map((k) => (
              <div
                key={k.id}
                className="w-[300px] h-[300px] shadow-lg flex justify-center items-center flex-col gap-5 px-2 transition duration-300 hover:scale-105"
              >
                <div>{k.img}</div>
                <h1 className="font-extrabold text-lg text-blue-600">
                  {k.title}
                </h1>
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
      <div>
        <div className="flex justify-center items-center flex-col h-[700px] bg-gray-100 gap-3">
          <h1 className="font-extrabold text-7xl p-3">Why Choose Us</h1>
          <p className="text-2xl text-gray-500">We provide reliable and efficient logistics solutions</p>
          <div className="flex flex-row flex-wrap justify-center gap-5">
            {Object.values(point).map((data) => (
              <div className="flex w-[300px] flex-col gap-4">
                <h1 className="font-bold text-center">
                  <Check className="text-blue-500"/>
                  {data.title}
                </h1>
                <p className="text-center">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default hero;
