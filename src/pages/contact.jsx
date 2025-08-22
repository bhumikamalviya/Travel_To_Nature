import React, { useState } from "react";
import { Header } from "../componats/header";
import { Footer } from "../componats/footer";

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
   
      <section className="min-h-screen bg-[#e6e6e6]  pt-28 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-10">
            Have questions about your next eco-friendly adventure?  
            Fill out the form below and we’ll get back to you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-[500px] mx-auto bg-white shadow-lg rounded-2xl p-8">
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
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center text-gray-700 space-y-2">
          <p><strong>Email:</strong> support@traveltonature.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> EcoTravel Office, Green Valley, India</p>
        </div>
      </section>

      <Footer />
    </>
  );
};
