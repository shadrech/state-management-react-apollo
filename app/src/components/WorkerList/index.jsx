import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Worker from "../Worker";
import { StyledLink } from "./styles";
import { Wrapper } from "../App/styles";
import workersQuery from "../../graphql/queries/workers.graphql";

export default () => {
  const { loading, error, data } = useQuery(workersQuery, {
    variables: {
      options: { limit: 200 },
      conditions: {}
    }
  });
  return (
    <Wrapper>
      <StyledLink to="/worker/create">
        <i className="fas fa-user-plus"></i>
      </StyledLink>
      {!loading && !error && data.workers.map(worker => <Worker key={worker.id} worker={worker} />)}
    </Wrapper>
  );
}
