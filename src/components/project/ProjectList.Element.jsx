import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

export const ProjectListContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  height: auto;
  /* overflow-x: hidden; */
  /* border: 1px solid blue; */
  ${mobile({ padding: "0" })}/* ${tablet({ padding: "0" })} */
`;

export const ProjectListContainerWrapper = styled.div`
  /* width: 1200px; */
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 3;
`;

export const ProjectListTop = styled.div`
  display: flex
  align-items: center;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

// export const ProjectListLinkWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const ProjectListLink = styled(LinkRouter)`
//   position: relative;
//   display: inline-block;
//   cursor: pointer;
//   outline: none;
//   border: 0;
//   vertical-align: middle;
//   text-decoration: none;
//   background: transparent;
//   padding: 0;
//   width: 8rem;
//   height: auto;

//   &:hover {
//     & > span .icon.arrow {
//       background: #fff;
//       transform: translate(-1rem, 0);
//     }
//     & > span + span {
//       color: #e82e2e;
//     }
//   }
// `;

// export const ProjectListCircle = styled.span`
//   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//   position: relative;
//   display: block;
//   margin: 0;
//   width: 1rem;
//   height: 3rem;
//   /* border: 1px solid yellow; */
//   border-radius: 1.625rem;
//   & .icon {
//     transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//     background: #fff;
//   }
//   & .icon.arrow {
//     transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//     left: 0.625rem;
//     width: 1.125rem;
//     height: 0.125rem;
//     background: transparent;
//   }
// `;

// export const ProjectListArrow = styled.span`
//   &::after {
//     position: absolute;
//     content: "";
//     top: -0.29rem;
//     right: 0.625rem;
//     width: 0.625rem;
//     height: 0.625rem;
//     border-top: 0.125rem solid #fff;
//     border-right: 0.125rem solid #fff;
//     transform: rotate(225deg);
//   }
// `;

// export const ProjectListText = styled.span`
//   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   padding: 0.75rem 0;
//   margin: 0 0 0 0;
//   /* color: #282936; */
//   font-weight: 700;
//   line-height: 1.6;
//   text-align: center;
//   text-transform: uppercase;
// `;

export const ProjectListTitleWrapper = styled(LinkRouter)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 30px;
  margin-bottom: 12px;
`;

export const ProjectListTitle = styled.span`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  font-family: "JetBrains Mono", "Fira Code", monospace;
`;

export const ProjectSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;
`;

export const ProjectSearchBarIconSvg = styled.div`
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
`;

export const ProjectSearchBarInput = styled.input`
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid #9e9e9e;
  border-radius: 8px;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  transition: 0.3s ease;

  &::placeholder {
    color: #9e9ea7;
  }

  &:focus,
  &:hover {
    outline: none;
    /* border-color: rgba(234, 76, 137, 0.4); */
    border-color: rgba(108, 24, 255, 0.4);
    box-shadow: 0 0 0 4px rgb(108, 24, 255 / 10%);
  }
`;

export const ProjectListDataContainer = styled.div`
  /* height: calc(100vh - 200px); */
  display: flex;
  gap: 20px;
  height: auto;
  flex-wrap: wrap;
`;

export const ProjectListDataCard = styled(LinkRouter)`
  width: 350px;
  height: 300px;
  border: 1px solid #e82e2e;
  border-radius: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  flex: 1 1 auto;
  /* flex: auto; */
`;

export const ProjectListDataImageWrapper = styled.div`
  height: 60%;
  /* background-color: green; */
  border-radius: 12px 12px 0 0;
`;

export const ProjectListImage = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px 12px 0 0;
  /* animation-name: projectOverview;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.69, 0.63, 0.73, 1.24);
  transition: all 0.4s; */
  /* transform: translateY(50%); */

  @keyframes projectOverview {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(30%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const ProjectListDataInfoWrapper = styled.div`
  /* height: 40%; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectListDataInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectListDataInfoBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin-top: 200px; */
`;

export const ProjectListDataInfoTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const ProjectListDataInfoSubtitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  opacity: 80%;
  height: 40px;
`;

export const ProjectListDataTechStack = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ProjectListDataTech = styled.span`
  font-size: 14px;
  color: #aaa;
`;
