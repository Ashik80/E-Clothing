import React from "react";
import "./DisplayItems.css";
import Button from "../components/Button";

const DisplayItem = () => {
  return (
    <div className="display-item">
      <div className="carousel-img">
        <img
          src="https://colorlib.com/preview/theme/winkel/images/about-2.jpg"
          alt=""
          width="100%"
        />
      </div>
      <div className="display-about">
        <h1 className="display-header">
          New Men'S Clothing Summer Collection 2019
        </h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <Button color="primary" content="Show all" />
      </div>
    </div>
  );
};

export default DisplayItem;
