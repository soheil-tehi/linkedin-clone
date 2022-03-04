import React from 'react'
import styled from 'styled-components'

export function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a >
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a >
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommentaion>
          <span>View all recommendations</span>
          <img src="/images/right-icon.svg" alt="" />
        </Recommentaion>

      </FollowCard>

      <BannerCard>
        <img src="/images/banner-card.jpg" alt="" />
      </BannerCard>
    </Container>
  )
}


const Container = styled.div`
  grid-area: rightside;
`;


const FollowCard = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  padding: 14px 12px;
`;



const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:rgba(0,0,0,0.6);
`;


const FeedList = styled.ul`
  list-style-type: none;
  margin-top: 1em;

  li{
    display: flex;
  }

  li>div{
    display: flex;
    flex-direction: column;
  }

  button{
   background-color: #fff;
   width: 80px;
   padding:5px 12px;
   border-radius:50px;
   margin-bottom: 10px ;
   border: 2px solid black;
   font-weight:600;
   color: rgba(0, 0, 0, 0.6);
   cursor: pointer;
  }

`;

const Avatar = styled.div`
  background: url('/images/hash.svg');
  width: 70px;
  height: 70px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-right: 10px;
`;


const Recommentaion = styled.div`
  display: flex;
  align-items: center;
  color: #0a66c2;
  font-size: 14px;
  padding-top: 14px;
  cursor: pointer;
`;

const BannerCard = styled(FollowCard)`
  margin-bottom:52px;
  padding: 0;

  img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 5px;
  }
`;