import { CardContent } from "./styles";

export default function Card({
  techTitle,
  techStatus,
  callback,
  name,
  ...rest
}) {
  return (
    <CardContent className="cardContent" name={name} {...rest}>
      <h1> {techTitle} </h1>
      <span> {techStatus} </span>
    </CardContent>
  );
}
