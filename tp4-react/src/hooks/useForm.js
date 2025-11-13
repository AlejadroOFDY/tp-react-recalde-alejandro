import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({
      ...value,
      [name]: inputValue,
    });
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return {
    value,
    handleChange,
    handleReset,
  };
};

export default useForm;
