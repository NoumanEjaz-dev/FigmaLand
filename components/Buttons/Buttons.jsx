import React from "react";

const Buttons = ({ title, color, padding, paddingtopbottom, width }) => {
  const buttonStyles = {
    backgroundColor: color,
    paddingLeft: padding,
    paddingRight: padding,
    paddingTop: paddingtopbottom,
    paddingBottom: paddingtopbottom,
    width: width,
  };
  return (
    <>
      <section className="mt-3">
        <div class="mt-3">
          <button
            type="submit"
            class=" rounded-full text-base px-8 py-3 text-center font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            style={buttonStyles}
          >
            {title}
          </button>
        </div>
      </section>
    </>
  );
};

export default Buttons;
