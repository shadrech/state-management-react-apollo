import React from "react";
import { withRouter } from "react-router-dom";
import Worker from "../Worker";
import { StyledLink } from "./styles";
import { Wrapper } from "../App/styles";

const workers = [
  {
    id: "npmY8CIRw",
    firstName: "Tapiwa",
    lastName: "Hy",
    email: "h@t.com",
    bio: "facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    skills: [
      "react",
      "devops",
      "analyst"
    ],
    organization: null
  },
  {
    id: "BxlS9Egb8",
    firstName: "Tatenda",
    lastName: "Cha",
    email: "tat@cha.com",
    bio: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    skills: [
      "react",
      "backend",
      "coding rock star"
    ],
    organization: {
      name: "Eurostar",
      description: "Tran COmpany Ltd",
      logo: "www.google.com"
    }
  },
  {
    id: "DPMcUGM7C",
    firstName: "Ta",
    lastName: "Cha",
    email: "tsc@tat.com",
    bio: "sjvn fvnjkdv djfbvkjd bvjkfbkf bdfkb dkjb fk",
    skills: [
      "react",
      "backend",
      "coding rock star"
    ],
    organization: null
  }
]

const WorkerList = props => {
  return (
    <Wrapper>
      <StyledLink to="/worker/create">
        <i className="fas fa-user-plus"></i>
      </StyledLink>
      {workers.map(worker => <Worker key={worker.id} worker={worker} />)}
    </Wrapper>
  );
}

export default WorkerList;
