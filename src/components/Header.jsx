import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
//action
import { signoutAPI } from '../redux/actions'

function Header(props) {


    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>

                <Search>
                    <div>
                        <img src="/images/search-icon.svg" alt="" />
                        <input type="text" placeholder='Search' />
                    </div>
                </Search>

                <Nav>
                    <NavListWrap>
                        <NavList className='active'>
                            <a href="#">
                                <img src="/images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>Notifications</span>
                            </a>
                        </NavList>



                        <User>
                            <a href="#" >
                                {
                                    props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> :
                                        <img src="/images/user.svg" alt="" />
                                }
                                <span>Me</span>
                                <img src="/images/down-icon.svg" alt="" />
                            </a>

                            <Modal>
                                <a onClick={() => { props.signoutAPI() }} >Sign out</a>
                            </Modal>

                        </User>

                        <Work>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>
                                    Work
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>

                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}


const Container = styled.div`
    background-color: white;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    padding:2px 0 ;

`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1128px;
    
`;

const Logo = styled.span`
   margin:0 10px 0 15px;
   font-size: 0px;`;

const Search = styled.div`

& > div{
    max-width: 280px;
    display: flex;
    background-color: #eef3f8;
    padding: 0 20px;
    border-radius: 4px;


    input{
      background-color: #eef3f8;
      outline: none;
      border: none;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding-left:15px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;

    }
}
`;


const Nav = styled.nav`
      margin-left:auto ;
      display: block;
      @media (max-width: 768px) {
      position: fixed;
      left: 0;
      bottom: 0;
      background: white;
      width: 100%;
  }
    `;


const NavListWrap = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;

    .active{
        span:after{
            content: "";
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
    
    `;


const NavList = styled.li`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active{
      a{
          span{
              color: rgba(0, 0, 0, 0.9);
          }
      }
  }
`;

const Modal = styled.div`
    position: absolute;
    top: 55px;
    background-color: #fff;
    border-radius: 10px;
    display: none;
    transition-duration:0.5s;
    a{
        font-size: 16px;
        padding: 5px 10px;
    }
`;

const User = styled(NavList)`
   a > img {
    width: 24px;
    height: 20px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover{
    ${Modal}{
        display: flex;
    }
  }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.5);
`;


const mapStateToProps = (state) => ({
    user: state.userState.user
})

const mapDispatchToProps = (dispatch) => ({
    signoutAPI: () => dispatch(signoutAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)