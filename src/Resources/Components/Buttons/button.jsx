import React from "react";

export default function Button({ btnType, btnSize, btnText, onClick }) {

  return (
    <button
      className={`btn-primary btn-primary-${btnType} btn-primary-${btnSize}`}
      onClick={onClick}
    >
      <div className="btn-text btn__original-text">
        <span>{btnText}</span>
      </div>
      <div className="btn-text btn__duplicate-text">
        <span>{btnText}</span>
      </div>
    </button>
  );
}
