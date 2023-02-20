import React from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { data } from "./Data";
import {
  Arrow,
  Circle,
  Link,
  ProjectButton,
  ProjectButtonContainer,
  ProjectContainer,
  ProjectContainerWrapper,
  ProjectDescription,
  ProjectFeature,
  ProjectFeatureIcon,
  ProjectFeatureName,
  ProjectFeatures,
  ProjectImage,
  ProjectImageWrapper,
  ProjectInfo,
  ProjectLink,
  ProjectName,
  ProjectStack,
  ProjectStacks,
  ProjectTitle,
  ProjectType,
  ProjectWrapper,
  Repo,
  Text,
} from "./Project.element";

const Project = () => {
  const { t } = useTranslation();

  return (
    <Element id="sc_qPRwer tOJyECT" name="sc_qPRwer tOJyECT">
      <ProjectContainer>
        <ProjectContainerWrapper>
          <ProjectTitle>{t("projects.name")}</ProjectTitle>
          {data.map((project, index) => {
            // console.log(project)
            const {
              description,
              images,
              logo,
              type,
              title,
              features,
              techStack,
              link,
              repo,
            } = project;
            // console.log(repo)
            return (
              <ProjectWrapper key={index}>
                <ProjectImageWrapper>
                  <ProjectImage src={images.dark} />
                  <ProjectLink>
                    {repo && (
                      <Repo
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        &#xe900; Repo
                      </Repo>
                    )}
                    {link && (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        &#xe904; Link
                      </Link>
                    )}
                  </ProjectLink>
                </ProjectImageWrapper>
                <ProjectInfo>
                  <ProjectType>{type}</ProjectType>
                  <ProjectName>{title}</ProjectName>
                  <ProjectDescription>{description}</ProjectDescription>
                  <ProjectFeatures>
                    {features.map((feature, index) => {
                      return (
                        <ProjectFeature key={index}>
                          <ProjectFeatureIcon />
                          <ProjectFeatureName>{feature}</ProjectFeatureName>
                        </ProjectFeature>
                      );
                    })}
                  </ProjectFeatures>
                  <ProjectStacks>
                    {techStack.map((stack, index) => {
                      return <ProjectStack key={index}>{stack}</ProjectStack>;
                    })}
                  </ProjectStacks>
                </ProjectInfo>
              </ProjectWrapper>
            );
          })}
          <ProjectButtonContainer>
            <ProjectButton to="/projects" >
              <Circle>
                <Arrow className="icon arrow"></Arrow>
              </Circle>
              <Text>View More</Text>
            </ProjectButton>
          </ProjectButtonContainer>
        </ProjectContainerWrapper>
      </ProjectContainer>
    </Element>
  );
};

export default Project;
