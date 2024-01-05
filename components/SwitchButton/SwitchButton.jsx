import { useState } from "react";

const Toggle = ({ Change, onToggle }) => {
  console.log(Change, "no change");
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
    onToggle();
  };

  return (
    <div>
      <button
        className={`${
          isToggled ? "bg-blue-500" : "bg-gray-300"
        } w-16 h-7 rounded-full p-1 focus:outline-none`}
        onClick={toggleButton}
      >
        <div
          className={`${
            isToggled ? "translate-x-0" : "translate-x-0"
          } w-5 h-5 bg-white rounded-full shadow-md transform transition-transform`}
        />
      </button>
    </div>
  );
};

export default Toggle;
