import styled from "styled-components";
import { mobile } from "../../responsive";
import logo from "./../img/logo192.png";
import cLight from "./../img/c light.png";
import cDark from "./../img/c dark.png";
import iLight from "./../img/I light.png";
import iDark from "./../img/I dark.png";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  /* background-color: #fff; */
  z-index: 10000;
`;

export const LoaderContainerWrapper = styled.div`
  width: 10rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderLogo = styled.div`
  width: 8rem;
  height: 10rem;

  ::before {
    display: block;
    position: absolute;
    content: "";
    height: 10rem;
    width: 2rem;
    /* url(${iLight}) */
    /* opacity: ${({ theme }) => theme.text === "white" ? '0.1' : '0.3'}; */
    background-image: ${({ theme }) => theme.text === 'white' ? `url(${iLight})` : `url(${iDark})`};
    background-size: cover;
    border-radius: 2px;
    animation-name: loader_flyInLeft;
    animation-duration: 0.5s;
  }

  ::after {
    content: "";
    position: absolute;
    display: block;
    margin-left: 1rem;
    height: 10rem;
    width: 8rem;
    border-radius: 2px;
    background-image: ${({ theme }) => theme.text === 'white' ? `url(${cLight})` : `url(${cDark})`};
    background-size: cover;
    animation-name: loader_flyInRight;
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.17, 0.67, 0.53, 1.15);
  }

  @keyframes loader_flyInLeft {
    0% {
      transform: translateX(-500px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes loader_flyInRight {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const LoaderProgress = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 0.6rem;
  height: 0.5rem;
  position: relative;
  /* transform: translateY(500px); */
  top: 2rem;
  background-color: #dbdbdb;
  box-shadow: 0 0 1rem #7000ff;
  overflow: hidden;
  animation-name: loader_fadeAppear;
  animation-duration: 2s;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    border-radius: 0.6rem;
    height: 0.4rem;
    width: 100%;
    left: -100%;
    background-color: #7000ff;
    /* background-color: #e82e2e; */
    /* background-image: linear-gradient(90deg, #8b31ff, #7000ff); */
    animation-name: loader_load;
    animation-duration: 4.3s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes loader_fadeAppear {
    0% {
      transform: translateY(500px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes loader_load {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

// export const LoaderContainer = styled.div`
//   padding: 0px 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   overflow-x: hidden;
//   ${mobile({ padding: "0" })}
// `;

// export const LoaderContainerWrapper = styled.div`
//   max-width: 1200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin: auto;
//   padding: 10px 20px;
//   line-height: 0.8em;
//   flex: 3;
// `;

// export const LoaderDotContainer = styled.div`
//   --uib-size: 50px;
//   --uib-speed: 1.2s;
//   --uib-color: #474554;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: var(--uib-size);
//   height: var(--uib-size);
// `;

// export const LoaderDot = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   height: 100%;
//   width: 25%;
//   transform-origin: center top;

//   &::after {
//     content: "";
//     display: block;
//     width: 100%;
//     height: 25%;
//     border-radius: 50%;
//     background-color: var(--uib-color);
//   }

//   &:first-child {
//     animation: swing var(--uib-speed) linear infinite;
//   }

//   &:last-child {
//     animation: swing2 var(--uib-speed) linear infinite;
//   }

//   @keyframes swing {
//     0% {
//       transform: rotate(0deg);
//       animation-timing-function: ease-out;
//     }

//     25% {
//       transform: rotate(70deg);
//       animation-timing-function: ease-in;
//     }

//     50% {
//       transform: rotate(0deg);
//       animation-timing-function: linear;
//     }
//   }

//   @keyframes swing2 {
//     0% {
//       transform: rotate(0deg);
//       animation-timing-function: linear;
//     }

//     50% {
//       transform: rotate(0deg);
//       animation-timing-function: ease-out;
//     }

//     75% {
//       transform: rotate(-70deg);
//       animation-timing-function: ease-in;
//     }
//   }
// `;
