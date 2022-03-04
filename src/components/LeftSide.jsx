import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

function LeftSide(props) {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a >
                        <Photo />
                        <Link>Welcome {props.user ? props.user.displayName : "there"}</Link>
                    </a>
                    <a >
                        <AddPhotoText>
                            Add a photo
                        </AddPhotoText>
                    </a>
                </UserInfo>

                <Wedget>
                    <a >
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Wedget>

                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>

            </ArtCard>

            <CommunityCard>
                <span>Groups</span>
                <a >
                    <span>Events</span>
                    <img style={{ paddingRight: "12px" }} src="/images/plus-icon.svg" alt="" />
                </a>

                <span>Follow Hashtags</span>

                <span>Discover more</span>
            </CommunityCard>

        </Container>
    )
}



const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    
    `;


const CardBackground = styled.div`
    background: url("/images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
    border-radius: 8px 8px 0 0; 
`;


const Photo = styled.div`
    background: url("/images/photo.svg");
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid white;
    margin: -34px auto 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 50%;
`;


const Link = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
`;



const AddPhotoText = styled.div`
    color:#0a66c2;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.33;
    margin-top: 5px;

    `;

const Wedget = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 15px 0;
    & > a{
     display: flex;
     justify-content: space-between;
     padding:  4px 12px;
    }

    &:hover{
        background-color: rgba(0,0,0,0.15);
    }

    div{
        display: flex;
        flex-direction: column;
        text-align: left;

        span{
            line-height: 1.33;
            &:first-child{
                color: rgba(0,0,0,0.6);
            }
            &:nth-child(2){
                color: rgba(0,0,0,1);
            }
        }
    }
`;

const Item = styled.div`
    text-align: left;
    padding: 14px 12px;
    font-weight: 600;
    span{
        display: flex;
        align-items: center;
    }

    &:hover{
        background-color: #ccc;
    }
`;

const CommunityCard = styled.div`
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
    span{
        line-height: 2;
        font-size: 15px;
        font-weight: 600;
        padding: 4px 12px;

        &:nth-child(3){
            border-bottom:1px solid #ccc;
        }

        &:nth-child(4){
            color:rgba(0,0,0,0.5);
            padding: 14px 12px;

            &:hover{
                background-color: #ccc;
            }
            
        }
    }

    a{
        display: flex;
        justify-content: space-between;  
    }    
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}


export default connect(mapStateToProps)(LeftSide)

