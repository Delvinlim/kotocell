import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import {
  Contact,
  Emoji,
  FirstName,
  HeroContact,
  HeroContainer,
  HeroContainerWrapper,
  HeroContainerWrapperLeft,
  HeroContainerWrapperRight,
  HeroCta,
  HeroCtaButton,
  HeroImage,
  HeroInfo,
  HeroIntro,
  HeroName,
  HeroWatermark,
  LastName,
} from "./Hero.element";
import hero from "../img/hero.svg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { t } = useTranslation();
  // Butuh Pulsa, Butuh Aksesoris, Butuh Paket
  // Counter mana lagi yang punya website di kota batam yuk eksplor toko kami
  // let textData = [t("hero.inf")]
  return (
    <HeroContainer>
      <HeroContainerWrapper>
        <Fade top>
          <HeroContainerWrapperLeft>
            {/* <HeroIntro>🙌Kotocell aja</HeroIntro> */}
            <HeroName>
              <FirstName>{t("hero.name")}</FirstName>
              <LastName>
                <Typewriter
                  options={{
                    strings: [
                      t("hero.typewritter-data.text-1"),
                      t("hero.typewritter-data.text-2"),
                      t("hero.typewritter-data.text-3"),
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </LastName>
            </HeroName>
            <HeroInfo>{t("hero.info")}</HeroInfo>
            <HeroCta>
              <HeroCtaButton href="https://wa.link/lgvtau" target="_blank">Kotocell aja</HeroCtaButton>
            </HeroCta>
          </HeroContainerWrapperLeft>
        </Fade>
        <Fade right>
          <HeroContainerWrapperRight>
            <HeroImage src={hero} />
          </HeroContainerWrapperRight>
        </Fade>
      </HeroContainerWrapper>
      {/* <HeroWatermark>{t("hero.watermark")}</HeroWatermark> */}
      <HeroContact>
        <Contact
          href="mailto: kotocell@gmail.com"
          rel="noopener noreferrer"
        >
          kotocell@gmail.com
        </Contact>
        {/* <Contact></Contact> */}
      </HeroContact>
    </HeroContainer>
  );
};

export default Hero;
