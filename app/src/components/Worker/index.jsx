import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { Collapse } from "react-collapse";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Worker, WorkerButtons, EditButton, DeleteButton, WorkerInfo, InfoEmail, InfoName, BgImage, ProfileImage, WorkerBio, InfoBio, InfoWrapper, InfoSkill, InfoSkillTitle, Divider, SkillsWrapper } from "./styles";
import setWorkerOpenMutation from "../../graphql/mutations/setWorkerOpen.graphql";

const WorkerComponent = props => {
  const { worker } = props;
  const deleteWorker = () => confirmAlert({
    title: "Confirm delete",
    message: `Are you sure you want to delete ${worker.firstName}?`,
    confirmLabel: "Yes",
    cancelLabel: "No",
    onConfirm: () => console.log("You're fired!"),
    onCancel: () => console.log("Not today")
  });
  const rand = Math.random();
  const [setWorkerOpen] = useMutation(setWorkerOpenMutation);

  return (
    <Worker>
      <BgImage />
      <WorkerButtons>
        <EditButton to={`/worker/update/${worker.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></EditButton>
        <DeleteButton onClick={deleteWorker}><i className="fa fa-trash" aria-hidden="true"></i></DeleteButton>
      </WorkerButtons>
      <InfoWrapper>
        <WorkerInfo>
          <ProfileImage alt="Random Profile" src={`https://randomuser.me/api/portraits/${rand > 0.5 ? "women" : "men"}/${Math.floor(rand * 100)}.jpg`} />
          <InfoName>{`${worker.firstName} ${worker.lastName}`}</InfoName>
          <InfoEmail>{worker.email}</InfoEmail>
        </WorkerInfo>
      </InfoWrapper>
      <Divider isOpened={worker.isOpen} onClick={() => {
        setWorkerOpen({ variables: {
          id: worker.id,
          isOpen: !worker.isOpen
        } });
      }}>
        view more
        <i className="fas fa-angle-down"></i>
      </Divider>
      <Collapse isOpened={worker.isOpen}>
        <WorkerBio>
          <InfoBio>{worker.bio}</InfoBio>
          <SkillsWrapper>
            <InfoSkillTitle>Skills</InfoSkillTitle>
            {worker.skills.map(skill => <InfoSkill key={skill}>{skill}</InfoSkill>)}
          </SkillsWrapper>
        </WorkerBio>
      </Collapse>
    </Worker>
  );
}

export default React.memo(WorkerComponent);
