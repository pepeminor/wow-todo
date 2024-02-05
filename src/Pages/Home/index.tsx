"use client";

import { Wrapper } from "@/app/styled";
import { Suspense } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <Wrapper>
        <Container>
          <Title>WOW Todo</Title>
        </Container>
      </Wrapper>
    </Suspense>
  );
};

export default Home;

const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  padding: 16px;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1020px;
  position: absolute;
  margin: 20px;
  left: 50%;
  top: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  height: 84%;
  background-color: aliceblue;
`;
