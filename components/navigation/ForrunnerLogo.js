import React from "react";

function Forerunner(props) {
  const title = props.title || "forerunner";

  return (
    <svg
      height="34"
      width="27"
      viewBox="0 0 27 34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M26.677 6.103S27.5.49 23.674.49h-4.927c-3.507 0-4.332 2.574-4.332 2.574l-2.883 9.082H6.51l-.185.581h5.023l-5.402 17.02s-1.016 3.456-1.904 3.456c-1.262 0 .926-5.834.926-5.834H.996S-.018 33.49 3.908 33.49H8.97c3.46 0 4.259-2.687 4.259-2.687l5.738-18.076h5.026l.186-.58h-5.027l2.462-7.756S22.647.78 23.567.78c1.21 0-.758 5.323-.758 5.323h3.868z"
          fill="var(--theme-foreground-color, var(--navy))"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Forerunner;
