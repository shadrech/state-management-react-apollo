import styled from "styled-components";
import { Link } from "react-router-dom";
import Banner from "../../assets/banner.svg";

export const Worker = styled.div`
  position: relative;
  margin: 10px;
  background: white;

  & > * {
    display: inline-block;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const WorkerInfo = styled.div`
  padding-left: 10px;
  font-family: "resagokrregular";
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const WorkerBio = styled(WorkerInfo)`
  width: auto;
`;

export const InfoName = styled.p`
  font-size: .9em;
  color: rgb(22, 28, 36);
  margin-bottom: 0;
  white-space: nowrap;
`;

export const InfoEmail = styled.p`
  font-size: .8em;
  margin: 0;
  color: rgb(57, 59, 61);
  white-space: nowrap;
`;

export const InfoBio = styled.p`
  font-size: .75em;
  text-align: left;
  color: rgb(57, 59, 61);
  position: relative;
  `;

export const InfoSkillTitle = styled(InfoBio)`
  font-size: .8em;
  font-weight: bolder;
  margin: 0;
  text-align: center;
`;

export const InfoSkill = styled(InfoBio)`
  display: inline-block;
  padding: 0 1.5rem;
  margin-top: 0;
  &::after {
    content: "•";
    position: absolute;
    right: 0;
    font-size: 1rem;
  }
  &:last-child {
    &::after {
      content: "";
    }
  }
`;

export const WorkerButtons = styled.div`
  position: absolute;
  z-index: 50;
  right: 0;
  top: 0;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Button = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const EditButton = styled(Link)`
  ${Button}
  color: ${props => props.theme.lightGrey}
`;

export const DeleteButton = styled.div`
  ${Button}
  color: ${props => props.theme.lightGrey}
`;

export const BgImage = styled(Banner)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  top: 15px;
  z-index: 10;
  position: relative;
  height: 65px;
  width: 65px;
  border: 4px solid white;
`;

export const Divider = styled.p`
  position: relative;
  display: block;
  margin: .5rem 1.5rem 0;
  text-align: left;
  width: 100%;
  font-size: .8rem;
  color: ${props => props.theme.darkBlue};
  i {
    margin: 0 .5rem;
    font-size: .8rem;
    ${props => props.isOpened && `
      transform: rotate(180deg);
    `}
  }
  &::after {
    content: "";
    height: 1px;
    background: ${props => props.theme.darkBlue};
    width: 85%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scaleY(.4);
  }
  &:hover {
    cursor: pointer;
  }
`;
