import React from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../store/slices/common";

export default function Products({ title }) {
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(openModalAction());

  return (
    <>
      <div className="content-header">
        <div className="content-header__title">{title}</div>
        <button className="main-button" onClick={handleOpen}>
          Додати новий продукт
        </button>
      </div>
      <List />
      <Modal />
    </>
  );
}
