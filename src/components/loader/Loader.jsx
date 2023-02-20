import React from "react";
import {
  LoaderContainer,
  LoaderContainerWrapper,
  LoaderDot,
  LoaderDotContainer,
  LoaderLogo,
  LoaderProgress,
} from "./Loader.element";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContainerWrapper>
        <LoaderLogo />
        <LoaderProgress />
        {/* <LoaderDotContainer>
          <LoaderDot></LoaderDot>
          <LoaderDot></LoaderDot>
          <LoaderDot></LoaderDot>
          <LoaderDot></LoaderDot>
        </LoaderDotContainer> */}
      </LoaderContainerWrapper>
    </LoaderContainer>
  );
};

export default Loader;
