import { useState } from "react";

const useForm = ({ initialState, validationRules, onSubmit }) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleChangeImages = (e) => {
    const files = e.target.files;
    const selectedImages = [];

    for (let i = 0; i < files.length; i++) {
      selectedImages.push(files[i]);
    }

    setImages(selectedImages.length);
    setValues({ ...values, images: selectedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    } else setErrors(validationErrors);
  };

  const validateForm = () => {
    const validationErrors = {};
    for (const fieldName in validationRules) {
      if (validationRules.hasOwnProperty(fieldName)) {
        const fieldRules = validationRules[fieldName];
        const fieldValue = values[fieldName];
        for (const ruleName in fieldRules) {
          if (fieldRules.hasOwnProperty(ruleName)) {
            const ruleValue = fieldRules[ruleName];
            const errorMessage = validateField(fieldValue, ruleName, ruleValue);
            if (errorMessage) {
              validationErrors[fieldName] = errorMessage;
              break;
            }
          }
        }
      }
    }
    return validationErrors;
  };

  const validateField = (value, ruleName, ruleValue) => {
    switch (ruleName) {
      case "required":
        return value ? "" : "Обов'язкове поле!";
      case "minLength":
        return value.length >= ruleValue ? "" : `Мінімум ${ruleValue} символа!`;
      default:
        return "";
    }
  };

  return {
    values,
    handleChange,
    handleChangeImages,
    handleSubmit,
    images,
    errors,
  };
};

export default useForm;
