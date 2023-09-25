import { useState } from "react";

const ToggleMenu = () => {
  const [active, setActive] = useState("all");
  return (
    <div className=" flex items-center gap-8 mx-6">
      <button
        onClick={() => setActive("all")}
        className={`bg-primary bg-opacity-25 rounded-full font-semibold uppercase px-4 py-2 ${
          active === "all" ? "bg-opacity-100 text-white" : ""
        }`}
      >
        all
      </button>
      <button
        onClick={() => setActive("attacker")}
        className={`bg-primary bg-opacity-25 rounded-full font-semibold uppercase px-4 py-2 ${
          active === "attacker" ? "bg-opacity-100 text-white" : ""
        }`}
      >
        attacker
      </button>
      <button
        onClick={() => setActive("midfielder")}
        className={`bg-primary bg-opacity-25 rounded-full font-semibold uppercase px-4 py-2 ${
          active === "midfielder" ? "bg-opacity-100 text-white" : ""
        }`}
      >
        midfielders
      </button>
      <button
        onClick={() => setActive("defenders")}
        className={`bg-primary bg-opacity-25 rounded-full font-semibold uppercase px-4 py-2 ${
          active === "defenders" ? "bg-opacity-100 text-white" : ""
        }`}
      >
        defenders
      </button>
      <button
        onClick={() => setActive("goalkeeper")}
        className={`bg-primary bg-opacity-25 rounded-full font-semibold uppercase px-4 py-2 ${
          active === "goalkeeper" ? "bg-opacity-100 text-white" : ""
        }`}
      >
        goalkeeper
      </button>
      
    </div>
  );
};

export default ToggleMenu;
