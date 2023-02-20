import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const ToggleContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  ${mobile({ maxWidth: "250px" })}
  /* ${tablet({ maxWidth: "230px" })} */
`;

export const ToggleContainerWrapper = styled.div`
  position: absolute;
  left: 10%;
  transform: translate(-10%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 10px 20px;
  ${mobile({ left: "20%" })}
`

export const Label = styled.label`
  font-size: 16px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Input = styled.input`
  &:checked + span {
    background-color: #e82e2e;
  }

  &:checked + span::before {
    transform: translateX(100%);
    box-shadow: inset 20px -4px 0px 15px #fff000;
  }
`;

export const Slider = styled.span`
  --background: #e82e2e;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;

  &::before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }
`;
