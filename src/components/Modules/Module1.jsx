import { useState } from 'react';

const Module1 = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => handleItemClick(index)}
            aria-expanded={index === activeIndex}
            aria-controls={`accordion-content-${index}`}
          >
            {item.title}
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`accordion-content ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Module1;