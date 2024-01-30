import React from "react";

type SpinnerProps = {
  variant?: "large-spinner" | "medium-spinner" | "small-spinner";
  alignSpin?: "center-spinner";
};

const Spinner = ({variant, alignSpin}: SpinnerProps) => {
  return <div className={`spinner-blk ${variant} ${alignSpin}`}></div>;
};

export default Spinner;
