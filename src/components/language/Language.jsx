import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Button, List, ListItem, ListSubheader, Popover } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { LanguageContainer, LanguageText, LanguageWrapper, ListContainer, Option, Select } from "./Language.element";

const languageMap = {
  en: { label: "EN", dir: "ltr", active: true },
  in: { label: "IN", dir: "ltr", active: false },
  zh: { label: "ZH", dir: "ltr", active: false }
};

const Language = () => {
  const selected = localStorage.getItem("i18nextLng").split('-')[0] || "en";
  // const selected = localStorage.getItem("i18nextLng").toLowerCase() || "en";
  const { t } = useTranslation();

  // const [menuAnchor, setMenuAnchor] = useState(null);
  // useEffect(() => {
  //   document.body.dir = languageMap[selected].dir;
  // }, [menuAnchor, selected]);

  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [selected]);

  const handleFilters = (e) => {
    const value = e.target.value;
    i18next.changeLanguage(value);
  };
  
  return (
      <LanguageContainer>
      <LanguageWrapper>
        <Select onChange={handleFilters} value={selected}>
          {/* <Option disabled select>
          {t("select_language")}
          </Option>  */}
          {Object.keys(languageMap)?.map(item => (
              <Option value={item} >
                {languageMap[item].label}
              </Option>
            ))}
        </Select>
      </LanguageWrapper>
    </LanguageContainer>
    // <LanguageContainer>
    //   <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
    //     {languageMap[selected].label}
    //     <ArrowDropDown fontSize="small" />
    //   </Button>
    //   <Popover
    //     open={!!menuAnchor}
    //     anchorEl={menuAnchor}
    //     onClose={() => setMenuAnchor(null)}
    //     anchorOrigin={{
    //       vertical: "bottom",
    //       horizontal: "right"
    //     }}
    //     transformOrigin={{
    //       vertical: "top",
    //       horizontal: "right"
    //     }}
    //   >
    //     <ListContainer>
    //       <List>
    //         {/* <ListSubheader>{t("select_language")}</ListSubheader> */}
    //         {Object.keys(languageMap)?.map(item => (
    //           <ListItem
    //             button
    //             key={item}
    //             onClick={() => {
    //               i18next.changeLanguage(item);
    //               setMenuAnchor(null);
    //             }}
    //           >
    //             {languageMap[item].label}
    //           </ListItem>
    //         ))}
    //       </List>
    //     </ListContainer>
    //   </Popover>
    // </LanguageContainer>
  );
};

export default Language;
