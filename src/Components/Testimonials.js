import React from "react";
import { StyledTestimonials } from "./Styled/Testimonials.styled";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IMG1 from "../IMG/testimonials-1.jpg";
import IMG2 from "../IMG/testimonials-2.jpg";
import IMG3 from "../IMG/testimonials-3.jpg";

export default function Testimonials() {
  return (
    <StyledTestimonials className="bg-light text-center">
      <Container>
        <h2 className="mb-5">What people are saying...</h2>
        <Row>
          <Col lg={4}>
            <div style={{ maxWidth: "18rem" }} className="mx-auto mb-5 mb-lg-0">
              <img
                src={IMG1}
                alt=""
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Margaret E.</h5>
              <p className="font-weight-light mb-0">
                "This is fantastic! Thanks so much guys!"{" "}
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div style={{ maxWidth: "18rem" }} className="mx-auto mb-5 mb-lg-0">
              <img
                src={IMG2}
                alt=""
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Fred S.</h5>
              <p className="font-weight-light mb-0">
                "Bootstrap is amazing. I've been using it to create lots of
                super nice landing pages."{" "}
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div style={{ maxWidth: "18rem" }} className="mx-auto mb-5 mb-lg-0">
              <img
                src={IMG3}
                alt=""
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Sarah W.</h5>
              <p className="font-weight-light mb-0">
                "Thanks so much for making these free resources available to
                us!"
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledTestimonials>
  );
}
