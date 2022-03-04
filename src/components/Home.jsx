import React from 'react'
import styled from 'styled-components';
import  LeftSide  from './LeftSide';
import  Main  from './Main';
import { RightSide } from './RightSide';
//react router dom
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

 function Home(props) {
  return (
    <Container>
      {
        !props.user && <Redirect to="/"/> 
      }
      <Section>
        <h5>
          <a >Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>

      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  )
}


const Container = styled.div`
  padding-top: 50px;

`;


const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 16px;
  text-decoration: underline;


  h5 {
    color: #0a66c2;
    font-size: 14px;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  
  @media (max-width: 768px){
     flex-direction: column;
        text-align: center;
  }
`;

const Layout = styled.div`
  margin: 25px 0;
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: 5fr 12fr 7fr;
  gap: 25px;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;

const mapStateToProps = (state) => {
  return {
    
    user: state.userState.user,
  }
}



export default connect(mapStateToProps)(Home)