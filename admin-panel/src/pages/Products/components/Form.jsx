import React from "react";
import { useGetItemsQuery, usePostMutation } from "../../../store/rtkq";
import useForm from "../../../utils/hooks/useForm";

export default function Form() {
  const { refetch } = useGetItemsQuery({ type: "products" });
  const [create] = usePostMutation();

  const form = useForm({
    initialState: {
      name: "",
      description: "",
      amount: "",
      genre: "",
      author: "",
      publishing_house: "",
      year: "",
      language: "",
      binding: "",
      book_format: "",
      page_numbers: "",
      images: [],
    },
    validationRules: {
      name: { required: true },
      description: { required: true },
      amount: { required: true },
      genre: { required: true },
      author: { required: true },
      publishing_house: { required: true },
    },
    onSubmit: (values) => {
      const formData = new FormData();
      Object.entries(values).forEach((i) => {
        if (i[0] === "images") {
          for (let j = 0; j < i[1].length; j++) {
            formData.append("images", i[1][j]);
          }
        } else formData.append(i[0], i[1]);
      });
      create({
        type: "product",
        data: formData,
      });
      refetch();
    },
  });

  const {
    values,
    handleChange,
    handleChangeImages,
    handleSubmit,
    images,
    errors,
  } = form;

  return (
    <form className="form-continer" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <label className="input-label">Назва продукту</label>
        <input
          className="input-field"
          type="text"
          placeholder="Назва продукту"
          name="name"
          value={values?.name}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-error">{errors?.name}</div>
      </div>

      <div className="input-container">
        <label className="input-label">Опис продукту</label>
        <input
          className="input-field"
          type="text"
          placeholder="Опис продукту"
          name="description"
          value={values?.description}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-error">{errors?.description}</div>
      </div>

      <div className="input-container">
        <label className="input-label">Кількість примірників</label>
        <input
          className="input-field"
          type="text"
          placeholder="Кількість примірників"
          name="amount"
          value={values?.amount}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-error">{errors?.amount}</div>
      </div>

      <div className="input-container">
        <label className="input-label">Жанр</label>
        <input
          className="input-field"
          type="text"
          placeholder="Жанр"
          name="genre"
          value={values?.genre}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-error">{errors?.genre}</div>
      </div>

      <div className="input-container">
        <label className="input-label">Автор</label>
        <input
          className="input-field"
          type="text"
          placeholder="Автор"
          name="author"
          value={values?.author}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-error">{errors?.author}</div>
      </div>

      <div className="input-container">
        <label className="input-label">Видавництво</label>
        <input
          className="input-field"
          type="text"
          placeholder="Видавництво"
          name="publishing_house"
          value={values?.publishing_house}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-error">{errors?.publishing_house}</div>
      </div>

      <div className="input-container">
        <label className="input-label">Рік випуску</label>
        <input
          className="input-field"
          type="number"
          placeholder="Рік випуску"
          name="year"
          value={values?.year}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="input-container">
        <label className="input-label">Мова видання</label>
        <input
          className="input-field"
          type="text"
          placeholder="Мова видання"
          name="language"
          value={values?.language}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="input-container">
        <label className="input-label">Палітурка</label>
        <input
          className="input-field"
          type="text"
          placeholder="Палітурка"
          name="binding"
          value={values?.binding}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="input-container">
        <label className="input-label">Формат книги</label>
        <input
          className="input-field"
          type="text"
          placeholder="Формат книги"
          name="book_format"
          value={values?.book_format}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="input-container">
        <label className="input-label">Кількість сторінок</label>
        <input
          className="input-field"
          type="text"
          placeholder="Кількість сторінок"
          name="page_numbers"
          value={values?.page_numbers}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="input-container">
        <label className="input-label">Зображення</label>
        <div className="file-container">
          <input
            className="input-file"
            type="file"
            placeholder="Зображення"
            name="images"
            id="file"
            multiple
            onChange={(e) => handleChangeImages(e)}
          />
          <label htmlFor="file" className="file-label">
            Вибрано зображень: {images}
          </label>
        </div>
      </div>

      <button className="form-button" onClick={(e) => handleSubmit(e)}>
        Додати новий продукт
      </button>
    </form>
  );
}
