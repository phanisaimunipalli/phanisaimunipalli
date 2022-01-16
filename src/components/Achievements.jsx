import React, { useEffect, useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Fade from "react-reveal";
import { ThemeContext } from "styled-components";
import endpoints from "../constants/endpoints";
import Header from "./Header";
import FallbackSpinner from "./FallbackSpinner";
import "../css/education.css";

function Achievements(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [width, setWidth] = useState("50vw");
  const [mode, setMode] = useState("HORIZONTAL");
  useEffect(() => {
    fetch(endpoints.achievements, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode("VERTICAL");
    }

    if (window?.innerWidth < 576) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth("75vw");
    } else {
      setWidth("50vw");
    }
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{ width: "100%" }} className="section-achieve-container">
            <Container style={{ width: "100%" }}>
              <Chrono
                hideControls
                cardPositionHorizontal={"BOTTOM"}
                allowDynamicUpdate
                useReadMore={false}
                items={data.achievements}
                cardHeight={350}
                mode={mode}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                <div className="chrono-icons">
                  {data.achievements.map((achievement) =>
                    achievement.icon ? (
                      <img
                        key={achievement.icon.src}
                        src={achievement.icon.src}
                        alt={achievement.icon.alt}
                      />
                    ) : null
                  )}
                </div>
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

Achievements.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Achievements;
