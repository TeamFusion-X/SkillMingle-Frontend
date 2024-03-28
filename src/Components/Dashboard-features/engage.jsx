// Engage.js
import React from "react";

const Engage = () => {
  const groups = [
    "Python Developers",
    "Army Institute of Technology",
    "Java Lovers",
    "Photographers",
    "Competitive Programming Hub",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {groups.map((group, index) => (
          <button
            key={index}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg block mt-4 w-full text-left"
            // Add an onClick handler if necessary
            onClick={() => console.log(group)}
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Engage;
