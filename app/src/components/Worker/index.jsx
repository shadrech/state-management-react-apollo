import React from "react";
import { Collapse } from "react-collapse";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Worker, WorkerButtons, EditButton, DeleteButton, WorkerInfo, InfoEmail, InfoName, BgImage, ProfileImage, WorkerBio, InfoBio, InfoWrapper, InfoSkill, InfoSkillTitle, Divider } from "./styles";

export default props => {
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
      <Divider isOpened={false}>
        view more
        <i className="fas fa-angle-down"></i>
      </Divider>
      <Collapse isOpened={false}>
        <WorkerBio>
          <InfoBio>{worker.bio}</InfoBio>
          <div>
            <InfoSkillTitle>Skills</InfoSkillTitle>
            {worker.skills.map(skill => <InfoSkill key={skill}>{skill}</InfoSkill>)}
          </div>
        </WorkerBio>
      </Collapse>
    </Worker>
  );
}
