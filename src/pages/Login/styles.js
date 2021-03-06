import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-bottom: 30px;
  }
`;

export const ContainerForm = styled.form`
  width: 90vw;
  max-width: 369px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-3);
  padding: 40px 0;
  border-radius: 4px;
  h2 {
    font-size: 14.43px;
    padding-bottom: 20px;
  }
  label {
    width: 90%;
    text-align: start;
    font-size: 9.77px;
    font-weight: 400;
    padding-bottom: 17px;
    span {
      color: red;
    }
  }

  div {
    margin-bottom: 18px;
  }
  p {
    margin-top: 27px;
    font-size: 9.63px;
    color: var(--gray-1);
    font-weight: 600;
    margin-bottom: 17.65px;
  }
`;
