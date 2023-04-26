import React from "react";
import CloseButton from "../../../assets/icons/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAction } from "../../../store/slices/common";
import Form from "./Form";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector(({ common }) => common.modal);

  const handleClose = () => dispatch(closeModalAction());
  return (
    <div
      className={modal.show ? "modal" : "modal hide"}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="modal-content">
        <div className="modal-content__header">
          <span className="modal-content__header-title">Додати новий продукт</span>
          <button className="button-img" onClick={handleClose}>
            <img src={CloseButton} alt="Close button" />
          </button>
        </div>
        <div className="modal-content__body">
          <Form />
        </div>
      </div>
    </div>
  );
}
