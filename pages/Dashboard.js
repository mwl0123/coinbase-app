import React from 'react';
import Header from '../components/Header'
import styled from 'styled-components';

const Dashboard = ({address}) => {
  return (
  <Wrapper>
      <MainContainer>
        <Header/>
      </MainContainer>
  </Wrapper>
  );
};
export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: black;
  color: white;
`
const MainContainer = styled.div`
    flex: 1;
`
