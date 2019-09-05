import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.lightGrey};
  }

  .react-confirm-alert-overlay {
    .react-confirm-alert {
      h1, h3 {
        font-family: "resagokrregular" !important;
      }
      .react-confirm-alert-button-group {
        button {
          border-radius: 0;
          height: 40px;
        }
      }
    }
  }
`;

export const App = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 50px;
  padding: 0 ${props => props.theme.sidePadding};
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60px;
`;
