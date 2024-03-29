// VerticalNav.js
import React from "react";
const VerticalNav = ({ onNavItemClick }) => {
  const [active, setActive] = React.useState("Engage");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Teaching", href: "#" },
    { name: "Learning", href: "#" },
    { name: "Engage", href: "#" },
    { name: "Requests", href: "#" },
  ];
  const handleClick = (item) => {
    setActive(item.name);
    onNavItemClick(item.name);
  };

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-3xl font-bold text-center text-purple-800">
        SKILLMINGLE
      </h2>
      <div className="mt-10">
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.name}
            className={`flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md ${
              active === item.name
                ? "bg-purple-700 text-white"
                : "hover:bg-purple-100"
            }`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VerticalNav;
