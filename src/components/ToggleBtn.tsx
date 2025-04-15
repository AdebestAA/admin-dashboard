import React, { useState } from "react";

type ToggleButtonProps = {
  onToggle?: (state: boolean) => void;
  defaultState?: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onToggle,
  defaultState = false,
}) => {
  const [isOn, setIsOn] = useState(defaultState);

  const toggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={toggle}
      className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
        isOn ? "bg-blue" : "bg-gray"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleButton;
