"use client";

import { Container, Title, Wrapper } from "@/app/styled";
import HeaderAction from "@/components/HeaderAction";
import ListTodoItem from "@/components/ListTodoItem";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Title>WOW Todo</Title>
        <HeaderAction />
        <ListTodoItem />
      </Container>
    </Wrapper>
  );
};

export default Home;
