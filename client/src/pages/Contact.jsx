import React from "react";

export default function Contact() {
  return (
    <section className=" py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-sm">
          For inquiries, feedback, or support, please fill out the form below.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800">Address</h4>
            <p className="text-sm text-gray-600">
              Ministry of Information  
              New Delhi, India
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-sm text-gray-600">info@govportal.in</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="3"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 active:scale-95 transition"
          >
            Send Message
          </button>
          
        </form>
         <div className="mt-10">
          <h2 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
            <i className="bx bx-info-circle"></i> Additional Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All submissions are handled securely and kept confidential.</li>
            <li>You can also report technical problems directly from this page.</li>
            <li>A small disclaimer: “Please do not share personal or sensitive information unless requested by authorized personnel.”</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
