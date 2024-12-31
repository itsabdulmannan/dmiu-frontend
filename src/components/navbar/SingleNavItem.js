import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SingleNavItem = ({ label, link, children }) => {
  const [isItemOpen, setItemOpen] = useState(false);

  const toggleItem = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to parent
    setItemOpen(!isItemOpen);
  };

  return (
    <div className="relative px-2 py-2 transition-all">
      {/* For simple links */}
      {!children && link ? (
        <a
          href={link}
          className="flex items-center gap-2 text-neutral-400 hover:text-black"
        >
          {label}
        </a>
      ) : (
        <p
          onClick={toggleItem}
          className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black"
        >
          <span>{label}</span>
          {children && (
            <IoIosArrowDown
              className={`text-xs transition-all ${
                isItemOpen && "rotate-180"
              }`}
            />
          )}
        </p>
      )}

      {/* Dropdown */}
      {isItemOpen && children && (
        <div className="flex w-auto flex-col gap-1 rounded-lg bg-white py-1 transition-all">
          {children.map((child, idx) => (
            <a
              key={idx}
              href={child.link}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleNavItem;
