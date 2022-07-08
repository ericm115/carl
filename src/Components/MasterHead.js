import React from "react";
import Container from "react-bootstrap/Container";
import { StyledMasterHead } from "./Styled/MasterHead.styled";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MasterHead() {
  return (
    <StyledMasterHead>
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xl={6}>
            <div className="text-center text-white">
              <h1 className="mb-5">
                Generate more leads with a professional landing page!
              </h1>
              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      className="form-control-lg"
                      type="email"
                      placeholder="Email Address"
                    ></Form.Control>
                  </Col>
                  <Col className="col-auto">
                    <Button variant="primary" type="submit" className="btn-lg">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledMasterHead>
  );
}
