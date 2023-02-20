import styled from "styled-components";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { mobile } from "../../responsive";

export const FooterContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  ${mobile({ padding: "0" })}
`;

export const FooterContainerWrapper = styled.div`
  max-width: 1200px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 3;
`;

export const FooterSocial = styled.div`
  padding: 10px 0px 5px;
`;

export const FooterSocialLogo = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  margin: 0 5px;
  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
`;

export const Email = styled(EmailOutlinedIcon)`
  font-size: 28px;
  &:hover {
    box-shadow: 0px 0px 25px 0px #7000ff;
    -webkit-box-shadow: 0px 0px 25px 0px #7000ff;
    -moz-box-shadow: 0px 0px 25px 0px #7000ff;
  }
`;

export const Github = styled(GitHubIcon)`
  font-size: 28px;
  &:hover {
    box-shadow: 0px 0px 25px 0px #7000ff;
    -webkit-box-shadow: 0px 0px 25px 0px #7000ff;
    -moz-box-shadow: 0px 0px 25px 0px #7000ff;
  }
`;

export const LinkedIn = styled(LinkedInIcon)`
  font-size: 28px;
  &:hover {
    box-shadow: 0px 0px 25px 0px #7000ff;
    -webkit-box-shadow: 0px 0px 25px 0px #7000ff;
    -moz-box-shadow: 0px 0px 25px 0px #7000ff;
  }
`;

export const Whatsapp = styled(WhatsAppIcon)`
  font-size: 28px;
  &:hover {
    box-shadow: 0px 0px 25px 0px #7000ff;
    -webkit-box-shadow: 0px 0px 25px 0px #7000ff;
    -moz-box-shadow: 0px 0px 25px 0px #7000ff;
  }
`;

export const Instagram = styled(InstagramIcon)`
  font-size: 28px;
  &:hover {
    box-shadow: 0px 0px 25px 0px #7000ff;
    -webkit-box-shadow: 0px 0px 25px 0px #7000ff;
    -moz-box-shadow: 0px 0px 25px 0px #7000ff;
  }
`;
export const FooterOnlineStatusContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FooterOnlineStatusTime = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 0;
  /* border: 1px solid blue; */
  width: 15%;
`;

export const Time = styled.span`
  margin: 0 10px;
`;

export const TimeZone = styled.span`
  margin: 0 10px;
`;

export const FooterOnlineStatus = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 10px 0 0;
  /* border: 1px solid blue; */
  width: 15%;
`;

export const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin: 0 10px;
`;

export const Status = styled.span`
  margin: 0 10px;
`;

export const FooterCopyright = styled.div`
  padding: 10px 0px;
  font-size: 18px;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  /* ${mobile({ fontSize: "14px" })} */
`;
