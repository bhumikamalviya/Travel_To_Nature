import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import mountains from "../data/mountain.json";

export function MountainDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find mountain by id
  const mountain = mountains.find((m) => m.id === parseInt(id));

  // Default main image = mountain.image
  const [mainImage, setMainImage] = useState(mountain ? mountain.image : "");

  if (!mountain) {
    return (
      <h2 className="text-center text-red-500 mt-10 font-['Poppins']">
        Mountain not found
      </h2>
    );
  }

  return (
    <div className="p-6 w-full bg-[#f3f4f6] min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-700 text-white ml-6 rounded-lg shadow hover:bg-gray-900 font-['Roboto']"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden p-6">
       {/* LEFT → Image Section */}
<div className="flex flex-col gap-3">
  {/* MAIN IMAGE */}
  <div className="relative rounded-xl overflow-hidden shadow-md">
    <img
      src={mainImage}
      alt={mountain.name}
      className="w-full h-120 object-cover transition-transform duration-300 hover:scale-105"
    />
    <div className="absolute bottom-3 left-3 bg-black/50 text-white text-lg px-3 py-1 rounded font-['Roboto']">
      {mountain.name}
    </div>
  </div>

  {/* THUMBNAIL IMAGES */}
  <div className="grid grid-cols-2 gap-3">
    {[...mountain.images].slice(0, 2).map((img, index) => (
      <div
        key={index}
        onClick={() => setMainImage(img)} // change main image on click
        className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer border-2 ${
          mainImage === img ? "border-green-600" : "border-transparent"
        }`}
      >
        <img
          src={img}
          alt={`${mountain.name} ${index + 1}`}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
</div>

        {/* RIGHT → Content Section */}
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 font-['Poppins']">
            {mountain.name}
          </h1>

          <p className="text-lg text-green-700 font-medium font-['Roboto']">
            📍 {mountain.location}
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed text-justify font-['Merriweather']">
            {mountain.descriptionn}
          </p>

          <p className="mt-4 font-semibold text-green-600 font-['Roboto']">
            Best Time to Visit: {mountain.best_time_to_visit}
          </p>

          <p className="mt-2 font-medium text-gray-600 font-['Roboto']">
            Height: {mountain.height_m} m
          </p>

          <div className="mt-6">
            <h3 className="font-bold text-xl text-gray-900 mb-3 font-['Poppins']">
              🎯 Activities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 font-['Roboto']">
              {mountain.activitiess.map((act, i) => (
                <li
                  key={i}
                  className="bg-green-50 px-3 py-2 rounded-lg shadow-sm hover:bg-green-100 transition"
                >
                  ✅ {act}
                </li>
              ))}
            </ul>

            <Link to="/planner">
              <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 hover:scale-105 transition-all duration-300">
                Go To Planner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
