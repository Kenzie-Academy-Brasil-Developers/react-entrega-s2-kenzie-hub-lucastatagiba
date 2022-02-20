import styled from "styled-components";

export const InputContainer = styled.div`
  width: 90%;
  height: 38.5px;
  border-radius: 3.21px;
  padding: 0px 13px;
  background-color: var(--gray-2);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  
  }

  input {
    flex: 1;
    width: 100%;
    background-color: var(--gray-2);
    border: none;
    color: white;

    ::placeholder {
      color: var(--gray-1);
    }
    
  
`;
