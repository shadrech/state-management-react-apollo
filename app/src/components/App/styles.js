import styled, { createGlobalStyle } from "styled-components";
import breakpoint from "styled-components-breakpoint";

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
  padding: 0 14rem;
  text-align: center;

  ${breakpoint('mobile', 'desktop')`
    padding: 0 4rem;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60px;
`;
