import React, { useState } from "react";
import { usePostMutation } from "../../../store/rtkq";

export default function Form() {
  const [form, setForm] = useState({});
  const [create] = usePostMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach((i) => formData.append(i[0], i[1]));
    create({type: "product", data: formData});
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => handleCreate(e)}>send</button>
    </form>
  );
}
