import { useState } from "react";

const Accordion = ({ children, contentDescriptor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={toggleOpen}
      >
        {isOpen ? "Hide" : "Show"} {contentDescriptor}!
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default Accordion;
