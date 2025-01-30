"use client";
import React from "react";
import useCounterStore from "@/stores/counter-store";
import styled from "styled-components";

export const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <>
      <CounterContainer>
        <CounterBoard> {count}</CounterBoard>
        <IncrementButton onClick={() => increment()}> Add </IncrementButton>
        <DecrementButton onClick={() => decrement()}> Sub </DecrementButton>
      </CounterContainer>
    </>
  );
};
const consumerPage = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default consumerPage;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounterBoard = styled.div`
  font-size: 24px;
  text-align: center;
  // margin-bottom: 16px;
  border: 1px solid #000;
`;
const IncrementButton = styled.button`
  font-size: 24px;
  //margin: 10px 0 10px 20px;
  border: 1px solid #000;
  padding: 8px;
`;
const DecrementButton = styled.button`
  font-size: 24px;
  //margin: 10px 10px 10px 0;
  border: 1px solid #000;
  padding: 8px;
`;
