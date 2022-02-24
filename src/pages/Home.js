import React from "react";
import styled from "styled-components";
import { Sidebar, Center, Right, SmallSide } from "../components";
import { Col, Row, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <Col lg={2} className="sides">
            <Sidebar />
            <SmallSide />
          </Col>

          <Col xs={12} md={7} lg={7}>
            <Center />
          </Col>

          <Col xs={12} md={5} lg={3}>
            <Right />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* padding-top: 2rem; */
  /*   @media screen and (max-width: 1024px) {
    .sides {
      display: none;
    }
  } */
`;

export default Home;
