import React from "react";

import '../../styles/modal.module.css';


const DeleteModal = ({ show, handleClose, handleConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Are you sure!</h3>
        <p>You want to delete this Job post?</p>
        <div className="modal-buttons">
          <button className="btn btn-danger" onClick={handleConfirm}>
            Yes
          </button>
          <button className="btn btn-cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
