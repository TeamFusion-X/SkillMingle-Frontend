// Learning.js
import React from 'react';

const Learning = () => {
  const learningTopics = [
    { topic: "C++", percentage: "56.72%", user: "kingsenior" },
    { topic: "Backend", percentage: "56.72%", user: "prakash_divya" },
    { topic: "Blockchain", percentage: "56.72%", user: "nasablackberry" },
    { topic: "Java", percentage: "56.72%", user: "prakash_divya" },
    { topic: "Go", percentage: "56.72%", user: "kingsenior" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {learningTopics.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-purple-100 hover:bg-purple-200 text-purple-800 p-4 rounded-lg mt-4">
            <span className="font-bold">{item.topic}</span>
            <span>{item.percentage}</span>
            <span className="text-sm">@{item.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
