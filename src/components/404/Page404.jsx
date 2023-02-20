import React from "react";
import {
  Page404Button,
  Page404ButtonContainer,
  Page404Container,
  Page404ContainerWrapper,
  Page404Image,
  Page404ImageContainer,
  Page404Text,
  Page404TextContainer,
} from "./Page404.Element";

const Page404 = () => {
  return (
    <>
      <Page404Container>
        <Page404ContainerWrapper>
          <Page404ImageContainer>
            <Page404Image href="" />
          </Page404ImageContainer>
          <Page404TextContainer>
            <Page404Text>Not Found</Page404Text>
          </Page404TextContainer>
          <Page404ButtonContainer>
            <Page404Button>Go Back</Page404Button>
          </Page404ButtonContainer>
        </Page404ContainerWrapper>
      </Page404Container>
    </>
  );
};

export default Page404;
