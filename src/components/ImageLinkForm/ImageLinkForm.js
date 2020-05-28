import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f4">
        This Magic Brain will detect faces in your pictures. Give it a try,
        enter a URL.
      </p>
      <div className="center">
        <div className="center pa3 br3 shadow-5 form">
          <input
            className="f4 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
