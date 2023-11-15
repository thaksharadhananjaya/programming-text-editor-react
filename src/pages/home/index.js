import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import { Col, Row } from "react-bootstrap";

import robo from "../../assets/robo_lottie.json";
import java from "../../assets/java.png";
import cPlus from "../../assets/c_plus.png";
import goLang  from "../../assets/golang.png";
import js  from "../../assets/js.png";
import python  from "../../assets/python.png";

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          {" "}
          <p className="home-banner-text">
          AI-Driven Easy
            <br />
            Coding&nbsp;
            <span className="span-banner">
              New Way
              <br />
              Programming
            </span>
          </p>
          <p>AI-Powered, Effortless Programming Excellence!</p>
          <br />
          <div>
            <Button variant="primary">Let's Code</Button>
            <Button style={{ marginLeft: "8px" }} variant="outline-primary">
              Learn more
            </Button>
          </div>
        </Col>
        <Col>
          <Lottie className="home-lottie" animationData={robo} />
          <div
            className="img-icon"
            style={{
              bottom: 100,
              right: 600,
              backgroundImage: `url(${java})`,
              width: "100px",
              height: "100px",
            }}
          />
          <div
            className="img-icon"
            style={{
              bottom: 250,
              right: 80,
              backgroundImage: `url(${cPlus})`,
              width: "110px",
              height: "110px",
            }}
          />
          <div
            className="img-icon"
            style={{
              top: 160,
              right: 60,
              backgroundImage: `url(${goLang})`,
              width: "80px",
              height: "80px",
            }}
          />
          <div
            className="img-icon"
            style={{
              bottom: 280,
              right: 640,
              backgroundImage: `url(${js})`,
              width: "80px",
              height: "80px",
            }}
          />
           <div
            className="img-icon"
            style={{
              bottom: 120,
              right: 160,
              backgroundImage: `url(${python})`,
              width: "80px",
              height: "80px",
            }}
          />
        </Col>
      </Row>
    </>
  );
}
