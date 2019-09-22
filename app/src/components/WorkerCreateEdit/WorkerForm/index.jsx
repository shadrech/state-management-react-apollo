import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Form, Input, FormGroup, FormSubmitButton, TextArea, ButtonsWrapper } from "./styles";
import createWorkerMutation from "../../graphql/mutations/createWorker.graphql";
import workersQuery from "../../graphql/queries/workers.graphql";

const WorkerForm = props => {
  const worker = null; //TODO: get worker from cache
  const [firstName, setFirstName] = useState(worker ? worker.firstName : "");
  const [lastName, setLastName] = useState(worker ? worker.lastName : "");
  const [email, setEmail] = useState(worker ? worker.email : "");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [createMutation, _] = useMutation(createWorkerMutation,  { update: (cache, { data: { createWorker } }) => {
    const { workers } = cache.readQuery({ query: workersQuery, variables: {
      options: { limit: 200 },
      conditions: {}
    } });
    cache.writeQuery({
      query: workersQuery,
      variables: {
        options: { limit: 200 },
        conditions: {}
      },
      data: {
        workers: workers.concat([createWorker])
      }
    });
  } });
  const handleFormSubmit = () => {
    let fields = {
      firstName,
      lastName,
      email,
      bio,
      skills
    };
    if (worker) {
      // update user
    } else {
      createMutation({
        variables: {
          worker: {
            ...fields,
            skills: skills.split(",")
          }
        }
      })
    }
    props.history.push("/");
  }
  const handleInputChange = ({ target: { name, value } }) => {
    eval(`set${name[0].toUpperCase()}${name.slice(1)}`)(value);
  }

  return (
    <Form>
      <FormGroup>
        <Input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleInputChange} />
        <Input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleInputChange} />
      </FormGroup>
      <Input type="text" name="email" value={email} placeholder="Email" onChange={handleInputChange} />
      <TextArea name="bio" value={bio} rows="10" placeholder="Something [nice] about the worker" onChange={handleInputChange} />
      <Input type="text" name="skills" value={skills} placeholder="Skills separated by commas" onChange={handleInputChange} />
      <ButtonsWrapper>
        <FormSubmitButton onClick={handleFormSubmit}><i className="fas fa-check"></i></FormSubmitButton>
        <FormSubmitButton onClick={() => props.history.push("/")}><i className="fas fa-times"></i></FormSubmitButton>
      </ButtonsWrapper>
    </Form>
  );
}

export default withRouter(WorkerForm);
