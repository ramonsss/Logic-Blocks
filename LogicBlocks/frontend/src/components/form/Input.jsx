import styles from "./Input.module.css";

const Input = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <input type="text" />
    </div>
  );
};

export default Input;
