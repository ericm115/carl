import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StyledSectionTwo } from "./Styled/SectionTwo.styled";

export default function SectionTwo() {
  return (
    <>
      <StyledSectionTwo>
        <div className="container-fluid p-0">
          <Row className="g-0">
            <Col lg={6} className="IMG1 showcase-img order-lg-2"></Col>
            <Col lg={6} className="showcase-text my-auto">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col lg={6} className="IMG2 showcase-img"></Col>
            <Col lg={6} className="showcase-text my-auto">
              <h2>Updated For Bootstrap 5</h2>
              <p className="lead mb-0">
                Newly improved, and full of great utility classes, Bootstrap 5
                is leading the way in mobile responsive web development! All of
                the themes on Start Bootstrap are now using Bootstrap 5!
              </p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col lg={6} className="IMG3 showcase-img order-lg-2"></Col>
            <Col lg={6} className="showcase-text my-auto">
              <h2>Easy to Use & Customize</h2>
              <p className="lead mb-0">
                Landing Page is just HTML and CSS with a splash of SCSS for
                users who demand some deeper customization options. Out of the
                box, just add your content and images, and your new landing page
                will be ready to go!
              </p>
            </Col>
          </Row>
        </div>
      </StyledSectionTwo>
    </>
  );
}
