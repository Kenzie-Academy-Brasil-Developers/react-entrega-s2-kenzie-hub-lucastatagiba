import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cabecalhoRegister {
    width: 90vw;
    max-width: 370px;
    display: flex;
    align-items: center;
    padding: 50px 0;
    justify-content: space-between;
  }
`;

export const ContainerForm = styled.div`
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
  }
  label {
    width: 90%;
    text-align: start;
    font-size: 9.77px;
    font-weight: 400;
    padding-bottom: 17px;
  }

  div {
    margin-bottom: 18px;
  }
  p {
    margin-top: 17px;
    font-size: 9.63px;
    color: var(--gray-1);
    font-weight: 600;
    margin-bottom: 17.65px;
  }
  select {
    width: 90%;
    height: 38.5px;
    border-radius: 3.21px;
    padding: 0px 13px;
    background-color: var(--gray-2);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border: none;
    color: var(--gray-1);
    margin-bottom: 17px;
  }
`;
