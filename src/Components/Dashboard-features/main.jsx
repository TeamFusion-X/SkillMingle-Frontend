
import React from 'react';

const MainDashboard = () => {
    const trendingSkills = [
        "Python", "C++", "GoLang", "Rust", "NodeJS",
        "JS", "Java", "C#", "C Lang",
        "Backend", "Python", "Frontend", "Python", "Python",
        "Python", "Python", "Python", "Python", "Python",
      ];
    
      return (
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="rounded-full bg-purple-600 text-white text-center font-bold py-2 mb-4">
              Trending Skills
            </div>
            <div className="grid grid-cols-4 gap-4">
              {trendingSkills.map((skill, index) => (
                <button
                  key={index}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold py-2 px-4 rounded-lg"
                  // Add an onClick handler if necessary
                  onClick={() => console.log(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    
};

export default MainDashboard;
