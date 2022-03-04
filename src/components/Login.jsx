import React from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
//redux
import { connect } from 'react-redux'

import { signInAPI } from '../redux/actions'

function Login(props) {


    return (
        <Container>
            {
                props.user &&
                <Redirect to="/home" />
            }
            <Nav>
                <Link to="/">
                    <img src="/images/login-logo.svg" alt="" />
                </Link>

                <div>
                    <Join>Join now</Join>
                    <Signin>Sign in</Signin>
                </div>
            </Nav>

            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>

                <Form>

                    <Google onClick={() => { props.singIn() }}>
                        <img src="/images/google.svg" alt="" />
                        <span>Sign in with Google</span>
                    </Google>
                </Form>

            </Section>
        </Container>
    )
}


const Container = styled.div`
    padding: 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1128px;
    margin: auto;

    
    

    & > a {
        width: 135px;
        @media (max-width: 768px) {
            padding:0 5px;
        }
    }
`;

const Join = styled.a`
    padding: 12px;
    cursor: pointer;
    transition: all ease 0.4s;
    border-radius: 6px;
    margin-right:12px ;
    color: rgba(0,0,0,0.6);

    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
    }
`;

const Signin = styled.a`
    padding: 10px 25px;
    border-radius: 50px;
    border: 1px solid #0073b1;;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    color: #0073b1;
    border-color: blue;
    background-color: rgba(0,0,0,0);
    box-sizing: border-box;
    transition: all ease 0.4s;

    &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        
    }
`;

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 70px 0;
    max-width: 1128px;
    margin: auto;
    position: relative;
    
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 550px;
    height: 670px;
    position: absolute;
    top: 0px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
   margin-top: 100px;
   width: 500px;
   text-align: center;
   @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px auto;
    border-radius:25px ;
    text-align: center;
    padding: 15px ;
    font-size: 20px;
    cursor: pointer;
    background-color: #fff;
    transition: 168ms;

    &:hover{
        background-color: #ccc;
    }

    @media (max-width:768px ){
        width: 100%;
        display: block;
        text-align: center;

    }
`;

const mapStateTpProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    singIn: () => dispatch(signInAPI())
})


export default connect(mapStateTpProps, mapDispatchToProps)(Login);