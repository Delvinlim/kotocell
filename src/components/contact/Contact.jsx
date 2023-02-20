import React, { useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  ContactBottomWrapper,
  ContactButtonWrapper,
  ContactContainer,
  ContactContainerWrapper,
  ContactForm,
  ContactInput,
  ContactInputWrapper,
  ContactLabel,
  ContactLocationInfo,
  ContactLocationInfoAddress,
  ContactLocationInfoAddressWrapper,
  ContactLocationInfoDay,
  ContactLocationInfoTime,
  ContactLocationInfoValue,
  ContactLocationInfoWrapper,
  ContactLocationMaps,
  ContactLocationWrapper,
  ContactSendButton,
  ContactSendButtonLoader,
  ContactSendButtonSvg,
  ContactSendButtonSvgWrapper,
  ContactSendButtonWord,
  ContactSubtitle,
  ContactTextArea,
  ContactTitle,
} from "./Contact.element";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 1.0461445, lng: 103.9294356 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 1.0461445, lng: 103.9294356 }} />
      )}
    </GoogleMap>
  ))
);

const Contact = () => {
  const { t } = useTranslation();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const { vertical, horizontal, open } = snackbar;

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let payload = {
    service_id: "service_xhb6mv9",
    template_id: "template_o3av2pd",
    user_id: "Nh2wdYGs6VIFS4t8X",
    template_params: {
      from_name: contact["name"],
      from_email: contact["email"],
      message: contact["message"],
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        payload
      );
      setContact({ name: "", email: "", message: "" });
      if (response.status === 200) {
        setLoad(false);
        setSnackbar({ open: true, vertical: "bottom", horizontal: "center" });
      }
    } catch (err) {
      if (err) {
        setLoad(false);
        setError(true);
        setSnackbar({ open: true, vertical: "bottom", horizontal: "center" });
      }
    }
  };

  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  return (
    <Element id="sc_qCOwer tNTyACT" name="sc_qCOwer tNTyACT">
      <ContactContainer>
        <ContactContainerWrapper>
          <ContactTitle>{t("contact.name")}</ContactTitle>
          <ContactSubtitle>
            {t("contact.title_support")}{" "}
            <span style={{ color: "#e82e2e" }}>{t("contact.title")}</span>
          </ContactSubtitle>
          <ContactBottomWrapper>
            <ContactForm onSubmit={handleSubmit}>
              <ContactInputWrapper>
                <ContactInput
                  required="1"
                  type="text"
                  autoComplete="off"
                  name="name"
                  value={contact["name"]}
                  onChange={handleChange}
                />
                <ContactLabel>{t("contact.form_name")}</ContactLabel>
              </ContactInputWrapper>
              <ContactInputWrapper>
                <ContactInput
                  required="1"
                  type="email"
                  autoComplete="off"
                  name="email"
                  value={contact["email"]}
                  onChange={handleChange}
                />
                <ContactLabel>{t("contact.form_email")}</ContactLabel>
              </ContactInputWrapper>
              <ContactInputWrapper>
                <ContactTextArea
                  rows="10"
                  required="1"
                  type="textarea"
                  autoComplete="off"
                  name="message"
                  value={contact["message"]}
                  onChange={handleChange}
                />
                {/* <ContactInput /> */}
                <ContactLabel>{t("contact.form_message")}</ContactLabel>
              </ContactInputWrapper>
              <ContactButtonWrapper>
                <ContactSendButton type="submit" disabled={load}>
                  {load ? (
                    <ContactSendButtonLoader></ContactSendButtonLoader>
                  ) : (
                    <>
                      <ContactSendButtonSvgWrapper>
                        <ContactSendButtonSvg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </ContactSendButtonSvg>
                      </ContactSendButtonSvgWrapper>
                      <ContactSendButtonWord>
                        {t("contact.form_send")}
                      </ContactSendButtonWord>
                    </>
                  )}
                </ContactSendButton>
                {/* <ContactInput type="submit" /> */}
              </ContactButtonWrapper>
            </ContactForm>
            <ContactLocationWrapper>
              <ContactLocationMaps>
                <MyMapComponent
                  isMarkerShown
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=Function.prototype`}
                  loadingElement={
                    <div style={{ height: `100%`, borderRadius: "12px" }} />
                  }
                  containerElement={
                    <div style={{ height: `250px`, borderRadius: "12px" }} />
                  }
                  mapElement={
                    <div style={{ height: `100%`, borderRadius: "12px" }} />
                  }
                />
                {/* <Map/> */}
              </ContactLocationMaps>
              <ContactLocationInfoWrapper>
                <ContactLocationInfo>
                  <ContactLocationInfoTime>
                    08:00 - 21:00
                  </ContactLocationInfoTime>
                  <ContactLocationInfoDay>
                    Senin - Minggu
                  </ContactLocationInfoDay>
                </ContactLocationInfo>
                <ContactLocationInfoAddressWrapper>
                  <ContactLocationInfoAddress>
                    Ruko Tunas Regency
                  </ContactLocationInfoAddress>
                  <ContactLocationInfoAddress>
                    Blok A11 No.8 Sagulung, Sungai Binti
                  </ContactLocationInfoAddress>
                  <ContactLocationInfoAddress>
                    Kecamatan Batu Aji, Kota Batam
                  </ContactLocationInfoAddress>
                </ContactLocationInfoAddressWrapper>
              </ContactLocationInfoWrapper>
            </ContactLocationWrapper>
          </ContactBottomWrapper>
        </ContactContainerWrapper>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity={error ? "error" : "success"}
            sx={{ width: "100%" }}
          >
            {error
              ? t("contact.error_1 contact.error_2")
              : t("contact.success")}
          </Alert>
        </Snackbar>
      </ContactContainer>
    </Element>
  );
};

export default Contact;
