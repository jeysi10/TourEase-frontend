import React from 'react';
import images from '../assets/images'; // Import all necessary images

const Routes = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md max-w-8xl flex gap-6">
      {/* Form Section */}
      <div className="flex-1">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          {/* Title */}
          <h6 className="text-xl font-semibold">Details</h6>

          {/* Post Button */}
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Post
          </button>
        </div>

        {/* Details Section */}
        <div className="text-left">
          {/* Location Input */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Where’s your current location?"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Destination Input */}
          <div className="mb-4">
            <label htmlFor="destination" className="block text-sm text-gray-600 mb-1">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Enter your destination"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Image Section */}
<div className="flex-1">
  <img
    src={images.map} // Replace with the correct import or path
    alt="Map Route"
    className="w-[1000px] h-[500px] rounded-lg object-cover" // Adjust height to make it bigger
  />
</div>

    </section>
  );
};

export default Routes;
