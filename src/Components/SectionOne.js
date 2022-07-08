import React from "react";
import { StyledSectionOne } from "./Styled/SecontionOne.styled";
import { Window, Layers, Terminal } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//    <Window className="m-auto text-primary" style={{ fontSize: "4.5rem" }} />

export default function SectionOne() {
  return (
    <StyledSectionOne className="bg-light text-center">
      <Container>
        <Row>
          <Col lg={4}>
            <div
              style={{ maxWidth: "20rem" }}
              className="mx-auto mb-5 mb-lg-0 mb-lg-3"
            >
              <div style={{ height: "7rem" }} className="d-flex">
                <Window
                  className="m-auto text-primary"
                  style={{ fontSize: "4.5rem" }}
                />
              </div>
              <h3>Fully Responsive</h3>
              <p className="lead mb-0">
                This theme will look great on any device, no matter the size!
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div
              style={{ maxWidth: "20rem" }}
              className="mx-auto mb-5 mb-lg-0 mb-lg-3"
            >
              <div style={{ height: "7rem" }} className="d-flex">
                <Layers
                  className="m-auto text-primary"
                  style={{ fontSize: "4.5rem" }}
                />
              </div>
              <h3>Bootstrap 5 Ready</h3>
              <p className="lead mb-0">
                Featuring the latest build of the new Bootstrap 5 framework!
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div
              style={{ maxWidth: "20rem" }}
              className="mx-auto mb-5 mb-lg-0 mb-lg-3"
            >
              <div style={{ height: "7rem" }} className="d-flex">
                <Terminal
                  className="m-auto text-primary"
                  style={{ fontSize: "4.5rem" }}
                />
              </div>
              <h3>Easy to Use</h3>
              <p className="lead mb-0">
                Ready to use with your own content, or customize the source
                files!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSectionOne>
  );
}
