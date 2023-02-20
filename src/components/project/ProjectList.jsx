import React from "react";
import {
  ChipContainer,
  Logo,
  ProjectListContainer,
  ProjectListContainerWrapper,
  ProjectListDataCard,
  ProjectListDataContainer,
  ProjectListDataImageWrapper,
  ProjectListDataInfoBottom,
  ProjectListDataInfoSubtitle,
  ProjectListDataInfoTitle,
  ProjectListDataInfoTop,
  ProjectListDataInfoWrapper,
  ProjectListDataTech,
  ProjectListDataTechStack,
  ProjectListImage,
  ProjectListTitle,
  ProjectListTitleWrapper,
  ProjectListTop,
  ProjectSearchBarContainer,
  ProjectSearchBarIconSvg,
  ProjectSearchBarInput,
} from "./ProjectList.Element";
import logo from "./../img/Logo Light.png";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { useEffect } from "react";
import portfolio from "../img/react_portfolio.png";
import pms from "../img/pms.png";
import kiddos from "../img/kiddos.png"
import restaurant from "../img/restaurant.png"
import skinlab from "../img/skinlab.jpg"

const ProjectList = () => {
  const [filterList, setFilterList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const updateFilterList = () => {
      setFilterList([
        {
          label: "React JS",
          variant: "outlined",
        },
        {
          label: "Express JS",
          variant: "outlined",
        },
        {
          label: "Styled Components",
          variant: "outlined",
        },
        {
          label: "Code Igniter",
          variant: "outlined",
        },
        {
          label: "Firebase",
          variant: "outlined",
        },
        {
          label: "Python",
          variant: "outlined",
        },
      ]);
    };
    const getProjects = () => {
      setProjects([
        {
          id: 1,
          image: portfolio,
          title: "Portfolio Site",
          subtitle:
            "Progressive Web Application built using react as personal portfolio",
          tech: [
            {
              name: "React JS",
            },
            {
              name: "Styled Components",
            },
          ],
        },
        {
          id: 2,
          image: pms,
          title: "Project Management System",
          subtitle: "Web app to manage university project with multiple roles",
          tech: [
            {
              name: "PHP",
            },
            {
              name: "Javascript",
            },
          ],
        },
        {
          id: 3,
          image: kiddos,
          title: "Kiddos Game",
          subtitle: "Web with 3 games made by team consist of 6 people",
          tech: [
            {
              name: "Javascript",
            },
            {
              name: "Node JS",
            },
            {
              name: "Express JS",
            },
          ],
        },
        {
          id: 4,
          image: skinlab,
          title: "Skinlab Mobile API",
          subtitle: "Internal API that are cover CRM, Sales, and Appointment",
          tech: [
            {
              name: "Python",
            },
            {
              name: "Odoo",
            },
          ],
        },
        {
          id: 5,
          image: restaurant,
          title: "Restaurant Web",
          subtitle:
            "Static web that are built to join coding challenge held by BWA",
          tech: [
            {
              name: "HTML",
            },
            {
              name: "CSS",
            },
          ],
        },
        {
          id: 6,
          image: "",
          title: "TabunganKu",
          subtitle:
            "Web application built for personal use in order to manage savings",
          tech: [
            {
              name: "PHP",
            },
            {
              name: "Code Igniter",
            },
          ],
        },
        {
          id: 7,
          image: "",
          title: "Megapipe",
          subtitle:
            "Manage you assets easier with this simple web application which built as final AKA project",
          tech: [
            {
              name: "React JS",
            },
            {
              name: "SASS",
            },
          ],
        },
        {
          id: 8,
          image: "",
          title: "DigiCater",
          subtitle:
            "Decentralized catering web application with ecommerce concept",
          tech: [
            {
              name: "React JS",
            },
            {
              name: "Express JS",
            },
            {
              name: "Firebase",
            },
          ],
        },
        {
          id: 9,
          image: "",
          title: "TestDrive",
          subtitle:
            "Simple test drive appointment application built under Microservices Architecture",
          tech: [
            {
              name: "C#",
            },
            {
              name: ".Net",
            },
            {
              name: "Rabbit MQ",
            },
          ],
        },
      ]);
    };
    updateFilterList();
    getProjects();
  }, []);

  const handleClick = (e, label, variant) => {
    setFilterList((prevState) => {
      const newState = prevState.map((filter) => {
        let oppositeVariant =
          filter.variant === "outlined" ? "filled" : "outlined";
        if (filter.label === label) {
          return { ...filter, variant: oppositeVariant };
        }

        return filter;
      });
      return newState;
    });
    let projectList = [];

    projectList.push(label);
    if (filteredProjects.length > 0) {
      if (filteredProjects.includes(label)) {
        setFilteredProjects((prevState) =>
          prevState.filter((e) => e !== label)
        );
      } else {
        setFilteredProjects((prevState) => prevState.concat(projectList));
      }
    } else {
      setFilteredProjects(projectList);
    }
  };

  return (
    <>
      <ProjectListContainer>
        <ProjectListContainerWrapper>
          <ProjectListTop>
            <ProjectListTitleWrapper to="/">
              <Logo src={logo} />
              <ProjectListTitle>Projects</ProjectListTitle>
            </ProjectListTitleWrapper>
            <ProjectSearchBarContainer>
              <ProjectSearchBarIconSvg>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </ProjectSearchBarIconSvg>
              <ProjectSearchBarInput
                onChange={(ev) => setQuery(ev.target.value)}
                placeholder="Search Project"
              />
            </ProjectSearchBarContainer>
          </ProjectListTop>
          <ChipContainer>
            {filterList?.map((filter, index) => {
              return (
                <Chip
                  key={index}
                  variant={filter.variant}
                  style={{
                    color: "#fff",
                    borderColor: filter.variant === "outlined" ? "#e82e2e" : "",
                    backgroundColor:
                      filter.variant === "outlined" ? "" : "#e82e2e",
                    borderRadius: "8px",
                  }}
                  label={filter.label}
                  onClick={(e) => handleClick(e, filter.label, filter.variant)}
                />
              );
            })}
          </ChipContainer>
          <ProjectListDataContainer>
            {projects
              .filter((project) => {
                if (query === "" && filteredProjects.length === 0) {
                  return project;
                } else if (
                  project.tech.some((label) =>
                    filteredProjects.includes(label.name)
                  )
                ) {
                  return project;
                } else if (
                  query !== "" &&
                  project.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return project;
                } else {
                  return "";
                }
              })
              .map((project) => {
                return (
                  <ProjectListDataCard to={`/projects/${project?.id}`} key={project?.id}>
                    <ProjectListDataImageWrapper>
                      <ProjectListImage src={project?.image} />
                    </ProjectListDataImageWrapper>
                    <ProjectListDataInfoWrapper>
                      <ProjectListDataInfoTop>
                        <ProjectListDataInfoTitle>
                          {project?.title}
                        </ProjectListDataInfoTitle>
                        <ProjectListDataInfoSubtitle>
                          {project?.subtitle}
                        </ProjectListDataInfoSubtitle>
                      </ProjectListDataInfoTop>
                      <ProjectListDataInfoBottom>
                        <ProjectListDataTechStack>
                          {project?.tech.map((stack, index) => {
                            return (
                              <ProjectListDataTech key={index}>
                                {stack?.name}
                              </ProjectListDataTech>
                            );
                          })}
                        </ProjectListDataTechStack>
                      </ProjectListDataInfoBottom>
                    </ProjectListDataInfoWrapper>
                  </ProjectListDataCard>
                );
              })}
            {/* {projects.map((project) => {
              return (
                <ProjectListDataCard to={`/${project?.id}`} key={project?.id}>
                  <ProjectListDataImageWrapper>
                    <ProjectListImage href={project?.image} />
                  </ProjectListDataImageWrapper>
                  <ProjectListDataInfoWrapper>
                    <ProjectListDataInfoTitle>
                      {project?.title}
                    </ProjectListDataInfoTitle>
                    <ProjectListDataInfoSubtitle>
                      {project?.subtitle}
                    </ProjectListDataInfoSubtitle>
                    <ProjectListDataTechStack>
                      {project?.tech.map((stack, index) => {
                        return (
                          <ProjectListDataTech key={index}>
                            {stack?.name}
                          </ProjectListDataTech>
                        );
                      })}
                    </ProjectListDataTechStack>
                  </ProjectListDataInfoWrapper>
                </ProjectListDataCard>
              );
            })} */}
          </ProjectListDataContainer>
        </ProjectListContainerWrapper>
      </ProjectListContainer>
    </>
  );
};

export default ProjectList;
