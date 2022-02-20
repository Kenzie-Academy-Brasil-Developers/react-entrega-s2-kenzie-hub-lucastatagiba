import { InputContainer } from "./styles";

export default function Input({
  icon: Icon,
  apearPass,
  setApearPass,
  ...rest
}) {
  return (
    <InputContainer>
      <input {...rest} />
      {Icon && <Icon onClick={() => setApearPass(!apearPass)} />}
    </InputContainer>
  );
}
