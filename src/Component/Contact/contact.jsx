import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

let head = [
  {
    id: 1,
    title: "Pune",
    description:
      "Flat No. 7, Shree Ganesh Residency, Lane No. 5, Koregaon Park, Pune – 411001, Maharashtra, India",
  },
  {
    id: 2,
    title: "Delhi",
    description:
      "H-34, Connaught Place, Block H, New Delhi – 110001, Delhi, India",
  },
  {
    id: 3,
    title: "Mumbai",
    description:
      "B-202, Seaside Residency, Juhu Tara Road, Juhu, Mumbai – 400049, Maharashtra, India",
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-800 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Contact Us
        </h1>
        <p className="mt-2 text-base md:text-lg text-white text-center max-w-2xl">
          Get in touch with our team for any inquiries or assistance
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-10 w-full">
          {/* Contact Info */}
          <section className="bg-white shadow-2xl p-5 rounded-lg flex-1 w-full">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-1 text-gray-500">
              Reach out to us through any of these channels
            </p>
            <div className="space-y-8 mt-8">
              <div className="flex items-start gap-4">
                <Phone className="text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">
                    Mon-Fri, 8am-6pm EST
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 ">
                <Mail className="text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-500 text-sm">
                    info@intercitylogistics.com
                  </p>
                  <p className="text-gray-500 text-sm">
                    support@intercitylogistics.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold">Headquarters</h3>
                  <p className="text-gray-500 text-sm">Pune</p>
                  <p className="text-gray-500 text-sm">Delhi</p>
                  <p className="text-gray-500 text-sm">Mumbai</p>
                </div>
              </div>
            </div>
          </section>

          {/* Message Form */}
          <section className="bg-white shadow-2xl p-6 rounded-lg flex-1 w-full">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="text-gray-500 mt-1">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
            <form className="space-y-5 mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="number" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="Enter your number"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <select
                    className="p-2 border border-gray-300 rounded"
                    name="Subject"
                    id="subject"
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="w-full h-[150px] border border-gray-300 rounded p-2"
                  id="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full">
          {head.map((k) => (
            <div
              key={k.id}
              className="bg-white text-black p-6 rounded-lg shadow-2xl hover:scale-105 transform transition duration-300"
            >
              <h1 className="text-xl font-bold border-b mb-2">{k.title}</h1>
              <p className="text-gray-500 text-sm">{k.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

