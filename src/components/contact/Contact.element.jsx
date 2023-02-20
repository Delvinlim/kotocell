import styled from "styled-components";
import { mobile } from "../../responsive";

export const ContactContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
  ${mobile({ padding: "0" })}
`;

export const ContactContainerWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  margin: auto;
  padding: 10px 20px;
  line-height: 0.8em;
  flex: 3;
`;

export const ContactBottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

export const ContactForm = styled.form`
  max-width: 660px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 5px 0;
`;

export const ContactLocationWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0;
`;

export const ContactLocationMaps = styled.div`
  padding: 10px;
  border-radius: 12px;
`;

export const ContactLocationInfoWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid blue; */
  gap: 5px;
`;

export const ContactLocationInfoAddressWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  font-weight: 600;
  /* align-items: flex-end; */
`

export const ContactLocationInfoAddress = styled.span`
  font-size: 18px;
`

export const ContactLocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: flex-end; */
  font-weight: 600;
`;

export const ContactLocationInfoTime = styled.span`
  font-size: 18px;
`;

export const ContactLocationInfoDay = styled.span`
  font-size: 24px;
`;

export const ContactTitle = styled.h5`
  /* padding: 0; */
  margin: 0;
`;

export const ContactSubtitle = styled.h1`
  margin: 20px 0 30px;
  font-size: 42px;
  ${mobile({ fontSize: "32px;" })}
`;

export const ContactInputWrapper = styled.div`
  position: relative;
  /* margin: 10px 0px; */
  padding: 10px;
`;

export const ContactButtonWrapper = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const ContactInput = styled.input`
  /* width: 100%; */
  width: 600px;
  border: solid 1.5px #9e9e9e;
  border-radius: 10px;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  /* color: #f5f5f5; */
  color: ${({ theme }) => theme.text};

  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  ${mobile({ width: "300px" })}

  &:focus,
  &:valid {
    outline: none;
    border: 1.5px solid #e82e2e;
  }

  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #e82e2e;
    padding: 0.5em;
    border-radius: 10px;
    color: #f5f5f5;
  }
`;

export const ContactTextArea = styled.textarea`
  width: 600px;
  border: solid 1.5px #9e9e9e;
  border-radius: 10px;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  /* color: #f5f5f5; */
  color: ${({ theme }) => theme.text};
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  ${mobile({ width: "300px" })}

  &:focus,
  &:valid {
    outline: none;
    border: 1.5px solid #e82e2e;
  }

  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #e82e2e;
    padding: 0.5em;
    border-radius: 10px;
    color: #f5f5f5;
  }
`;

export const ContactLabel = styled.label`
  /* display: flex;
  justify-content: center; */
  position: absolute;
  left: 25px;
  color: ${({ theme }) => theme.text};
  pointer-events: none;
  transform: translateY(1.2rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ContactSendButton = styled.button`
  font-family: inherit;
  font-size: 20px;
  background: #e82e2e;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;

  & > span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  & > div > div > svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    & > div > div {
      animation: fly-1 0.6s ease-in-out infinite alternate;
    }

    & > div > div > svg {
      transform: translateX(2.5em) rotate(45deg) scale(1.1);
    }

    & > span {
      transform: translateX(6em);
    }
  }

  &::active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
`;

export const ContactSendButtonLoader = styled.div`
  --uib-size: 25px;
  --uib-speed: 1.5s;
  --uib-color: ${({ theme }) => theme.text};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: rotate936 calc(var(--uib-speed) * 1.667) infinite linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 60%;
    width: 60%;
    border-radius: 50%;
    background-color: var(--uib-color);
    will-change: transform;
    flex-shrink: 0;
  }

  &::before {
    animation: orbit var(--uib-speed) linear infinite;
  }

  &::after {
    animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2)
      infinite;
  }

  @keyframes rotate936 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes orbit {
    0% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }

    5% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.684208);
      opacity: 0.58;
    }

    10% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.631576);
      opacity: 0.51;
    }

    15% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.578944);
      opacity: 0.44;
    }

    20% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.526312);
      opacity: 0.37;
    }

    25% {
      transform: translate(0%) scale(0.47368);
      opacity: 0.3;
    }

    30% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.526312);
      opacity: 0.37;
    }

    35% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.578944);
      opacity: 0.44;
    }

    40% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.631576);
      opacity: 0.51;
    }

    45% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.684208);
      opacity: 0.58;
    }

    50% {
      transform: translate(calc(var(--uib-size) * -0.5)) scale(0.73684);
      opacity: 0.65;
    }

    55% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.789472);
      opacity: 0.72;
    }

    60% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.842104);
      opacity: 0.79;
    }

    65% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.894736);
      opacity: 0.86;
    }

    70% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.947368);
      opacity: 0.93;
    }

    75% {
      transform: translate(0%) scale(1);
      opacity: 1;
    }

    80% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.947368);
      opacity: 0.93;
    }

    85% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.894736);
      opacity: 0.86;
    }

    90% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.842104);
      opacity: 0.79;
    }

    95% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.789472);
      opacity: 0.72;
    }

    100% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }
  }
`;

export const ContactSendButtonSvgWrapper = styled.div``;

export const ContactSendButtonSvg = styled.div``;

export const ContactSendButtonWord = styled.span``;
