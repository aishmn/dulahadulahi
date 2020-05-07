import React from "react";

const Spinner = () => {
  return (
    <div
      className="text-center self-align-center mt-5 pt-5"
      style={{ minHeight: "650px" }}
    >
      <div
        className="spinner-grow"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
