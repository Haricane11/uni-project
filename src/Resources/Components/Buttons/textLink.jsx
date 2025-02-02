import React from "react";

export default function TextLink({btnType, btnText, onClick }) {
  return (
    <button type={btnType} className="text-link" onClick={onClick}>
      <span>{btnText}</span>
    </button>
  );
}
