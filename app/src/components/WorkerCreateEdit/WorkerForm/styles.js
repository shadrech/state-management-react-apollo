import styled from "styled-components";

export const Form = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: 40px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-family: "resagokrregular";
  font-size: 1em;
  padding-left: 10px;
  border: none;
`;

export const TextArea = styled.textarea`
  height: auto;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-family: "resagokrregular";
  font-size: .9em;
  padding-left: 10px;
  border: none;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: calc(50% - 5px);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const FormSubmitButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: ${({ theme: { blue } }) => blue};
  border: 1px solid ${({ theme: { blue } }) => blue};
  border-radius: 50%;
  height: 40px;
  width: 50px;
  margin: 1rem 2rem;
  text-decoration: none !important;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;
