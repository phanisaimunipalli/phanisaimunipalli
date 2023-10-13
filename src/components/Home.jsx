import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal";
import endpoints from "../constants/endpoints";
import Social from "./Social";
import FallbackSpinner from "./FallbackSpinner";

const styles = {
  nameStyle: {
    fontSize: "5em",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <div>
          <img src={data?.imageSource} width="230px" alt="phanisaimunipalli" />
        </div>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: "row" }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <br></br>
        {/* <p><b>Excited to Announce the Launch of My Brand New Podcast: The Hustle Chapters 🥳</b></p> */}
      <p>
      <br></br>
        <u>What's New With Me? </u>
        <br></br>
        <ul>
        <li> <b>Developed</b>:{" "}
            <a
              className="a-main-article"
              href="https://linkplus.vercel.app/"
              target="_blank"
            >
              LinkPlus for LinkedIn (Gen-AI Product)
            </a>
          </li>
        <li> <b>Launched</b>:{" "}
            <a
              className="a-main-article"
              href="https://open.spotify.com/show/0qh7VRnAXiUqzWEBD87HBN"
              target="_blank"
            >
              The Hustle Chapters (Podcast: Decision-Making)
            </a>
          </li>
          <li> <b>Developed </b>:{" "}
            <a
              className="a-main-article"
              href="https://github.com/phanisaimunipalli/giftgen"
              target="_blank"
            >
              GiftGen (powered by Open AI's GPT-4)
            </a>
          </li>
          {/* <li>
              <b>Completed </b>:{" "}
            <a
              className="a-main-article"
              href="https://www.credly.com/badges/cd03de69-9fc7-4ee4-813f-9351f37e64ab/public_url"
              target="_blank"
            >
              AWS Cloud Quest: Cloud Practitioner
            </a>
          </li> */}
          
        </ul>  
        
      </p>
        <Social />
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
