import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Worker from "../Worker";
import { StyledLink, WorkersWrapper } from "./styles";
import { Wrapper } from "../App/styles";
import workersQuery from "../../graphql/queries/workers.graphql";

export default () => {
  const { loading, error, data } = useQuery(workersQuery, {
    variables: {
      options: { limit: 200 },
      conditions: {}
    }
  });
  console.log('DATA--->', data, loading, error)
  return (
    <Wrapper>
      <StyledLink to="/worker/create">
        <i className="fas fa-user-plus"></i>
      </StyledLink>
      <WorkersWrapper>
        {!loading && !error && data.workers.map(worker => <Worker key={worker.id} worker={worker} />)}
      </WorkersWrapper>
    </Wrapper>
  );
}
