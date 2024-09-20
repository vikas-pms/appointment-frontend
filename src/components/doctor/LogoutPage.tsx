import React from 'react';

function LogoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <img
          src="/goodbye-icon.png" // Example placeholder for an image, replace with your image URL
          alt="Goodbye"
          className="w-20 h-20 mx-auto mb-6"
        />
        <p className="text-2xl font-semibold mb-2 text-gray-800">Oh no! You're leaving...</p>
        <p className="text-lg text-gray-600 mb-6">Are you sure?</p>
        <div className="flex justify-between space-x-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-200">
            Naah, Just Kidding
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-200">
            Yes, Log Me Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
