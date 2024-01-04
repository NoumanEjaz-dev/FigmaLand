import React from "react";

const Buttons = ({ title }) => {
  return (
    <>
      <section className="mt-3">
        <div class="mt-3">
          <button
            type="submit"
            class=" rounded-full bg-blue-500 text-base px-8 py-3 text-center text-sm font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {title}
          </button>
        </div>
      </section>
    </>
  );
};

export default Buttons;
