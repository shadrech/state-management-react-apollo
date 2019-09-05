import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../../graphql/apolloClient";
import WorkerList from "../WorkerList";
import WorkerCreateEdit from "../WorkerCreateEdit";
import { App, GlobalStyles } from "./styles";
import Header from "../Header";
import theme from "../../theme";
import "../../assets/fonts/fonts.css";

export default function() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <App>
            <GlobalStyles />
            <Header />
            <Route exact path="/" component={WorkerList} />
            <Route path="/worker/update/:id" component={WorkerCreateEdit} />
            <Route path="/worker/create" component={WorkerCreateEdit} />
          </App>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}
