import { InputContainer } from "./styles";

export default function Input({
  icon: Icon,
  apearPass,
  setApearPass,
  register,
  name,
  error,
  label,
  handleChange,
  ...rest
}) {
  return (
    <>
      <label>
        {label}
        {!!error && <span> - {error}</span>}
      </label>
      <InputContainer>
        <input {...(register && { ...register(name) })} {...rest} name={name} />
        {Icon && <Icon onClick={() => setApearPass(!apearPass)} />}
      </InputContainer>
    </>
  );
}
