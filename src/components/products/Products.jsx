import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import "./product.css";
import {
  PanelBox,
  PanelData,
  PanelDataText,
  PanelImage,
  ProductContainer,
  ProductContainerWrapper,
  ProductRecommendation,
  ProductRecommendationCtaButton,
  ProductRecommendationWrapper,
  ProductsTitle,
  ProductsTitleWrapper,
  TabText,
  TabsWrapper,
} from "./Products.element";
import pulsa from "../img/pulsa.jpg";
import pulsa2 from "../img/pulsa 2.jpg";
import aksesoris from "../img/aksesoris1.jpg";
import aksesoris2 from "../img/aksesoris2.jpg";
import aksesoris3 from "../img/aksesoris3.jpg";
import voucher from "../img/voucher.jpg";
import voucher2 from "../img/voucher2.png";
import voucher3 from "../img/aksesoris3.jpg";

const Products = () => {
  const { t } = useTranslation();

  return (
    <Element id="sc_qPRwer tODyUCT" name="sc_qPRwer tODyUCT">
      <ProductContainer>
        <ProductContainerWrapper>
          <ProductsTitleWrapper>
            <ProductsTitle>
              {t("products.name_support")}{" "}
              <span style={{ color: "#e82e2e" }}>{t("products.name")}</span>
            </ProductsTitle>
          </ProductsTitleWrapper>
          <TabsWrapper>
            <Tabs>
              <TabList>
                <Tab>
                  <TabText>Pulsa</TabText>
                </Tab>
                <Tab>
                  <TabText>Aksesoris</TabText>
                </Tab>
                <Tab>
                  <TabText>Voucher</TabText>
                </Tab>
              </TabList>
              <TabPanel>
                <div className="panel-content">
                  <PanelBox>
                    <PanelImage src={pulsa} loading="lazy" />
                    <PanelData>
                      <PanelDataText href="https://wa.link/dgmq9f" target="_blank">{t('product.credit')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                  <PanelBox>
                    <PanelImage src={pulsa2} loading="lazy"/>
                    <PanelData>
                      <PanelDataText href="https://wa.link/dgmq9f" target="_blank">{t('product.credit')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel-content">
                  <PanelBox>
                    <PanelImage src={aksesoris} loading="lazy" />
                    <PanelData>
                      <PanelDataText href="https://wa.link/8onolr" target="_blank">{t('product.accessories')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                  <PanelBox>
                    <PanelImage src={aksesoris2} loading="lazy" />
                    <PanelData>
                      <PanelDataText href="https://wa.link/8onolr" target="_blank">{t('product.accessories')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                  <PanelBox>
                    <PanelImage src={aksesoris3} loading="lazy" />
                    <PanelData>
                      <PanelDataText href="https://wa.link/8onolr" target="_blank">{t('product.accessories')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel-content">
                  <PanelBox>
                    <PanelImage src={voucher} loading="lazy" />
                    <PanelData>
                      <PanelDataText href="https://wa.link/tkkbf1" target="_blank">{t('product.data_package')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                  <PanelBox>
                    <PanelImage src={voucher2} loading="lazy" />
                    <PanelData>
                      <PanelDataText href="https://wa.link/tkkbf1" target="_blank">{t('product.data_package')}</PanelDataText>
                    </PanelData>
                  </PanelBox>
                </div>
              </TabPanel>
            </Tabs>
          </TabsWrapper>
          <ProductRecommendationWrapper>
            <ProductRecommendation>
              Penasaran dengan produk selengkapnya? Tunggu apalagi
            </ProductRecommendation>
            {/* <ProductRecommendation>Tunggu apalagi</ProductRecommendation> */}
            {/* <ProductRecommendation>
              Segera hubungi +6821 7713 2002 atau Klik tombol dibawah berikut
            </ProductRecommendation> */}
            <ProductRecommendationCtaButton href="https://wa.link/lgvtau" target="_blank">
              Call Now
            </ProductRecommendationCtaButton>
          </ProductRecommendationWrapper>
        </ProductContainerWrapper>
      </ProductContainer>
    </Element>
  );
};

export default Products;
