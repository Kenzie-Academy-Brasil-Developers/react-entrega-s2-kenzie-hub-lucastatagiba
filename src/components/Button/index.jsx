import { useHistory } from "react-router-dom";
import { ButtonStyle } from "./styles";

export default function Button({
  children,
  width,
  height,
  color,
  historyEndPoint,
  fontSize,
  maxWidth,
  callback,
  type,
}) {
  const history = useHistory();
  return (
    <ButtonStyle
      width={width}
      height={height}
      color={color}
      onClick={() => {
        callback && callback();
        history.push(historyEndPoint);
      }}
      fontSize={fontSize}
      maxWidth={maxWidth}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
}
