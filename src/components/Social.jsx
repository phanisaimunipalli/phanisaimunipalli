import React, { useEffect, useState, useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";
import endpoints from "../constants/endpoints";

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="social">
      <p><b>Published Articles</b></p>
      <p>
        Published by <b>Mind The Product</b> - World's Largest Product Community:{" "}
        <a
          className="a-main-article"
          href="https://www.mindtheproduct.com/self-discovery-and-landing-a-product-management-internship"
          target="_blank"
        >
          Self-Discovery of Product Management
        </a>
        <br></br>
        Published by <b>Walmart</b>:{" "} Predicting Customer Behavior:  {" "}
        <a
          className="a-main-article"
          href="https://medium.com/walmartglobaltech/what-is-pattern-x-c9f0fe63d5e6"
          target="_blank"
        >
          What is Pattern X?
        </a>
      </p>
      
      {data
        ? data.social.map((social) => (
            <SocialIcon
              key={social.network}
              style={styles.iconStyle}
              url={social.href}
              network={social.network}
              bgColor={theme.socialIconBgColor}
              target="_blank"
              rel="noopener"
            />
          ))
        : null}
    </div>
  );
}

export default Social;
