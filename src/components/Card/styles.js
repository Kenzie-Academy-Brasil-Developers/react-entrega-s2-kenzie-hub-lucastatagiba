import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  background: var(--gray-4);
  padding: 12.18px;
  height: 48.73px;
  border-radius: 4.06px;
  justify-content: space-between;
  width: 100%;
  :hover {
    background: var(--gray-2);
  }
  h1 {
    font-weight: bold;
    font-size: 14.21px;
    color: var(--gray-0);
  }
  span {
    color: var(--gray-1);
    font-size: 12.18px;
    font-weight: 400;
  }
`;
