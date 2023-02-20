import React, { useState } from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import {
  AboutContainer,
  AboutContainerWrapper,
  AboutContent,
  AboutSkills,
  AboutSocial,
  AboutTitle,
  Content,
  Image,
  ImageContent,
  ImageQuotesContainer,
  Paragraph,
  Quotes,
  QuotesContainer,
  Skill,
  SkillContainer,
  SkillLogo,
  LogoSpan,
  SkillTitle,
  LogoTitle,
  AboutWhyUsContainer,
  AboutWhyUsTop,
  AboutWhyUsBottom,
  AboutWhyUsBox,
  AboutWhyUsImage,
  AboutWhyUsText,
  AboutWhyUsBoxWrapper,
  AboutWhyUsBoxTopText,
  AboutWhyUsBoxBottomText,
} from "./About.element";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import profile from "../img/kotocell.png";
import smile from "../img/smile.png";
import peta from "../img/peta.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Skill
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </Skill>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const About = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Element id="sc_qABwer tOUyTS" name="sc_qABwer tOUyTS">
      <AboutContainer>
        <AboutContainerWrapper>
          <AboutTitle>
            {t("about.name_support")}{" "}
            <span style={{ color: "#e82e2e" }}>{t("about.name")}</span>
          </AboutTitle>
          <AboutContent>
            <Content>
              <Paragraph>👋 Bonjour! {t("about.first_paragraph")}</Paragraph>
              <Paragraph>{t("about.second_paragraph")}</Paragraph>
              <Paragraph>{t("about.third_paragraph")}</Paragraph>
              <Paragraph>{t("about.fourth_paragraph")}</Paragraph>
              <QuotesContainer>
                <Quotes>{t("about.quotes")}</Quotes>
              </QuotesContainer>
            </Content>
            <ImageContent>
              <Image src={profile} loading="lazy" />
              <ImageQuotesContainer>
                <Quotes>{t("about.quotes")}</Quotes>
              </ImageQuotesContainer>
            </ImageContent>
          </AboutContent>
          <AboutWhyUsContainer>
            <AboutWhyUsTop>Why Choose Us</AboutWhyUsTop>
            <AboutWhyUsBottom>
              <AboutWhyUsBoxWrapper>
                {/* <AboutWhyUsBoxTopText>over</AboutWhyUsBoxTopText> */}
                <AboutWhyUsBox>
                  <AboutWhyUsImage src={smile} loading="lazy" />
                  <AboutWhyUsText>10k</AboutWhyUsText>
                </AboutWhyUsBox>
                <AboutWhyUsBoxBottomText>{t("about.why_us_1")}</AboutWhyUsBoxBottomText>
              </AboutWhyUsBoxWrapper>
              <AboutWhyUsBoxWrapper>
                <AboutWhyUsBox>
                  <AboutWhyUsImage src={peta} loading="lazy" />
                  <AboutWhyUsText>3</AboutWhyUsText>
                </AboutWhyUsBox>
                <AboutWhyUsBoxBottomText>{t("about.why_us_2")}</AboutWhyUsBoxBottomText>
              </AboutWhyUsBoxWrapper>
            </AboutWhyUsBottom>
          </AboutWhyUsContainer>
          {/* <AboutSkills>
            <SkillTitle>{t("about.skills")}</SkillTitle>
            <SkillContainer>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="Tabs"
                variant="fullWidth"
              >
                <Tab label={t("about.proficient")} {...a11yProps(value)} />
                <Tab label={t("about.familiar")} {...a11yProps(value)} />
              </Tabs>
              <SwipeableViews
                index={value}
                onChangeIndex={(value) => setValue(value)}
                enableMouseEvents
                animateHeight
              >
                <TabPanel value={value} index={value}>
                  <LogoSpan>
                    <SkillLogo src={html} />
                    <LogoTitle>HTML</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={css} />
                    <LogoTitle>CSS</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={javascript} />
                    <LogoTitle>Javascript</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={python} />
                    <LogoTitle>Python</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={php} />
                    <LogoTitle>PHP</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={git} />
                    <LogoTitle>Git</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={subversion} />
                    <LogoTitle>Subversion</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={react} />
                    <LogoTitle>React</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={styledComponent} />
                    <LogoTitle>Styled Components</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={nodejs} />
                    <LogoTitle>NodeJS</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={express} />
                    <LogoTitle>Express</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={mysql} />
                    <LogoTitle>MySQL</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={sequelize} />
                    <LogoTitle>Sequelize</LogoTitle>
                  </LogoSpan>
                </TabPanel>
                <TabPanel value={value} index={value}>
                  <LogoSpan>
                    <SkillLogo src={jquery} />
                    <LogoTitle>Jquery</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={typescript} />
                    <LogoTitle>Typescript</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={ionic} />
                    <LogoTitle>Ionic</LogoTitle>
                  </LogoSpan>
                  <LogoSpan>
                    <SkillLogo src={mongodb} />
                    <LogoTitle>MongoDB</LogoTitle>
                  </LogoSpan>
                </TabPanel>
              </SwipeableViews>
            </SkillContainer>
          </AboutSkills> */}
          <AboutSocial></AboutSocial>
        </AboutContainerWrapper>
      </AboutContainer>
    </Element>
  );
};

export default About;
