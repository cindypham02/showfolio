import React, { useState } from "react";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`accordion-item mb-4 border-b-2 border-gray-300`}
        >
          <button
            onClick={() => handleToggle(index)}
            className="accordion-header w-full text-left py-3 px-4 text-xl font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            {section.title}
          </button>
          {activeIndex === index && (
            <div className="accordion-content p-4 bg-gray-50">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

