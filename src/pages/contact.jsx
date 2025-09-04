import React, { useState } from "react";
import { Header } from "../componats/header";
import { Footer } from "../componats/footer";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#e6e6e6] pt-28 pb-16 px-6 overflow-hidden">
        {/* Top Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6 text-sm">
              We’d love to hear from you. Drop us a message and our team will get back soon.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Images */}
          <div className="relative mr-16 mt-10 mb-10 ml-12">
            <motion.img
              src="contact3.jpg"
              alt="Contact"
              className="w-full h-[350px] object-cover  rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            <motion.img
              src="contact6.jpg"
              alt="Contact Overlay"
              className="absolute -bottom-14 -left-16 w-[220px] h-[150px] object-cover rounded-xl shadow-2xl border-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.img
              src="contact5.jpg"
              alt="Contact Overlay"
              className="absolute -top-14 -right-16 w-[230px] h-[160px] object-cover rounded-xl shadow-2xl border-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <div className="w-full bg-[#e6e6e6] mx-auto text-center pb-10">
        <div className="text-gray-700 space-y-2">
          <p><strong>Email:</strong> support@traveltonature.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> EcoTravel Office, Green Valley, India</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
