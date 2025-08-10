import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About the Secure Government Information Portal
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our mission is to provide verified public information, improve transparency,
          and facilitate secure access to official government resources.
        </p>
      </section>

      {/* Objectives */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Our Key Objectives
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Deliver accurate and timely information",
            "Strengthen public access to resources",
            "Enhance secure inter-department communication",
          ].map((objective, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <i className="bx bx-check-circle text-blue-600 text-3xl mb-3"></i>
              <p className="text-lg">{objective}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Portal Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "bx-news", title: "Verified News", desc: "Access only authentic and verified government news & article." },
            { icon: "bx-buildings", title: "Department Info", desc: "Find resources organized by ministries and departments." },
            { icon: "bx-search", title: "Advanced Search", desc: "Filter and locate official documents & news article quickly and efficiently." },
            { icon: "bx-lock", title: "Secure Login", desc: "Authorized person access via encrypted authentication." },
            { icon: "bx-shield", title: "Data Protection", desc: "High-level security protocols to safeguard sensitive data." },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <i className={`bx ${feature.icon} text-blue-600 text-3xl mb-3`}></i>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Security & Privacy Commitment
        </h2>
        <p className="text-lg">
          The Secure Government Information Portal adheres to the highest standards
          of cybersecurity, including SSL encryption, two-factor authentication, and
          strict access control policies. User data privacy is our top priority.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-blue-800 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact & Feedback</h2>
        <p className="mb-6">
          Have suggestions or questions? Reach out to our support team for assistance.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;
