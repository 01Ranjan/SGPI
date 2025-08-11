import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-blue-700">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Portal</h2>
          <p className="text-sm leading-relaxed">
            The Secure Government Information Portal provides verified,
            up-to-date, and publicly accessible government information.
            Ensuring transparency and security for all citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/article" className="hover:underline">Articles</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Important Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
            <li><a href="/help" className="hover:underline">Help & Support</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <p className="text-sm">Govt. Information Office</p>
          <p className="text-sm">New Delhi, India</p>
          <p className="text-sm mt-2">Email: info@govportal.in</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-950 py-4">
        <p className="text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Secure Government Information Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/login"]; // List of routes where footer should be hidden

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>

      {/* Footer conditionally rendered */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}