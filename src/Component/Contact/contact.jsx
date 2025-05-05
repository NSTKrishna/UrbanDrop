import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Footer from "../Home /Footer/footer";

let head = [{
  id: 1,
  title: "Pune",
  description:
    "Flat No. 7, Shree Ganesh Residency, Lane No. 5, Koregaon Park, Pune – 411001, Maharashtra, India",
},{
  id: 2,
  title: "Delhi",
  description:
    "H-34, Connaught Place, Block H, New Delhi – 110001, Delhi, India",
},{
  id: 3,
  title: "Mumbai",
  description:
    "B-202, Seaside Residency, Juhu Tara Road, Juhu, Mumbai – 400049, Maharashtra, India",}
]

const contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-700">
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-[32px] font-extrabold text-white">Contact Us</h1>
        <p className="text-[16px] text-white">
          Get in touch with our team for any inquiries or assistance
        </p>
        <div className="flex flex-row py-10 gap-20">
          <section className="w-[350px] h-[600px] bg-white shadow-2xl p-5 rounded-lg">
            <h2 className="text-[28px] font-bold">Contact Information</h2>
            <p className="text-[16px] text-gray-500">
              Reach out to us through any of these channels
            </p>
            <div className="flex flex-col gap-10 py-10">
              <div className="flex flex-row gap-5">
                <Phone className="text-blue-400" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-500 text-[14px]">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-[14px]">
                    Mon-Fri, 8am-6pm EST
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <Mail className="text-blue-400" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-500 text-[14px]">
                    info@intercitylogistics.com
                  </p>
                  <p className="text-gray-500 text-[14px]">
                    support@intercitylogistics.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <MapPin className="text-blue-400" />
                <div>
                  <h3 className="font-bold">Headquarters</h3>
                  <p className="text-gray-500 text-[14px]">Pune</p>
                  <p className="text-gray-500 text-[14px]">Delhi</p>
                  <p className="text-gray-500 text-[14px]">Mumbai</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-[600px] h-[600px] bg-white shadow-2xl p-5 rounded-lg">
            <h2 className="text-[28px] font-bold">Send Us a Message</h2>
            <p className="text-[16px] text-gray-500">
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
            <div className="flex flex-col gap-5 py-10">
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <label for="name" required>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-[250px] border-2 border-gray-300 rounded p-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label for="email" required>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-[250px] border-2 border-gray-300 rounded p-2"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <label for="number" required>
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    placeholder="Enter your number"
                    className="w-[250px] border-2 border-gray-300 rounded p-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label for="subject" required>
                    Subject
                  </label>
                  <select className="w-[250px] border-2 border-gray-300 rounded p-2" name="Subject" id="subject">
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option> 
                    <option value="other">Other</option> 
                  </select> 
                </div> 
              </div> 
              <label for="message">Message</label> 
              <textarea
              className="w-[520px] h-[150px] border-2 border-gray-300 rounded p-2"
                id="message"
                placeholder="Enter your message"
                required 
              ></textarea> 
            </div> 
            <button className="bg-blue-500 text-white p-2 rounded">Send Message</button> 
          </section> 
        </div> 
        <div> 
        </div> 
      </div> 
      <div className="flex justify-center items-center flex-row gap-10 pb-15">
        {head.map((k) => (
          <div key={k.id} className="flex flex-col gap-5 w-[300px] h-[220px] bg-white px-5 shadow-2xl flex justify-center items-center gap-5 transition duration-300 hover:scale-105 wrap rounded-lg">
            <h1 className="font-extrabold text-[28px]">{k.title}</h1>
            <p className="text-gray-500 text-[16px]">{k.description}</p>
          </div> 
        ))} 
      </div> 
      <Footer /> 
    </div> 
  );
};

export default contact;