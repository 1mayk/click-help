import { IInput } from "../../../interfaces/iInput"

function Input(props: IInput) {
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default Input;
