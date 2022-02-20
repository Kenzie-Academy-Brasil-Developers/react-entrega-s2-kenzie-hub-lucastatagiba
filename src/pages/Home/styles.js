import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .navBar {
    width: 100vw;
    height: 72px;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 99;
    background-color: var(--gray-4);
  }

  .navContent {
    width: 100%;
    max-width: 779.73px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 13px;
  }
  .hrNav {
    position: fixed;
    z-index: 99;
    top: 72px;
    width: 100vw;
    border: 1px solid var(--gray-3);
  }
  .header {
    position: absolute;
    height: 120px;
    top: 73px;
    display: flex;
    flex-direction: column;
    padding: 13px;
    text-align: left;
    width: 100%;
    max-width: 779.73px;

    h1 {
      font-size: 18px;
      color: var(--gray-0);
      margin-top: 7px;
    }
    h2 {
      font-weight: 600;
      font-size: 12px;
      color: var(--primaryPink);
      margin-top: 10px;
    }
    span {
      margin-top: 20px;
      color: var(--gray-1);
      font-style: italic;
    }
  }
  .hrHeader {
    position: absolute;
    z-index: 99;
    top: 192px;
    width: 100vw;
    border: 1px solid var(--gray-3);
  }
  .cardHeader {
    position: absolute;
    top: 193px;
    width: 100%;
    max-width: 779.73px;
    text-align: start;
    padding: 27px 13px 28px 13px;
    display: flex;
    justify-content: space-between;
  }
  .CardsTitle {
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-0);
  }
`;

export const ContainerCards = styled.div`
  position: absolute;
  z-index: 0;
  top: 280px;
  width: 90vw;
  max-width: 369px;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-3);
  padding: 22px 13px;
  border-radius: 4px;
  width: 100%;
  max-width: 779.73px;
  gap: 16px;
`;
