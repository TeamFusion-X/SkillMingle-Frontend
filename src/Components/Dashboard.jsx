// Dashboard.js
import React, { useState } from "react";
import MainDashboard from "./Dashboard-features/main";
import Engage from "./Dashboard-features/engage";
import Learning from "./Dashboard-features/learning";
import VerticalNav from "./VerticalNav"; // make sure the path is correct

const Dashboard = () => {
  // const [content, setContent] = useState("Engage Content"); // Default content
  const [activeSection, setActiveSection] = useState("Engage"); // Default to Engage

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <MainDashboard />;
      // case "Teaching":
      //   return <Teaching />;
      case "Learning":
        return <Learning />;
      case "Engage":
        return <Engage />;
      // case "Requests":
      //   return <Requests />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex">
      <VerticalNav onNavItemClick={(section) => setActiveSection(section)} />
      <div className="flex-1 p-10">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
