import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  background-color: ${(props) =>
    props.color ? `var(${props.color})` : "black"};
  border: none;
  border-radius: 4.06px;
  color: white;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "16px")};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "324px")};
`;
