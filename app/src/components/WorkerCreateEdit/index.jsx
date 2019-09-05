import React from "react";
import WorkerForm from "../WorkerForm";
import { Title } from "./styles";
import { Wrapper } from "../App/styles";

export default ({ worker }) => (
  <Wrapper>
    {worker ? <Title>Edit {worker.firstName}'s profile</Title> : <Title>Create New Worker</Title>}
    <hr style={{ marginTop: 0 }} />

    <WorkerForm worker={worker} />
  </Wrapper>
);
