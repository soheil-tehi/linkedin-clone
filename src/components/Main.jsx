import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import PostModal from './PostModal';
import { getArticleAPI } from '../redux/actions'
import ReactPlayer from 'react-player';

function Main(props) {

    const [showModal, setShowModal] = useState("close")

    useEffect(() => {
        props.getArticles()
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return
        }

        switch (showModal) {
            case "open":
                setShowModal("close");
                break;

            case "close":
                setShowModal("open")
                break;

            default:
                setShowModal("close")
        }
    }


    return (
        <>
            {
                props.articles.length === 0 ?
                    <p>There are no article</p> :

                    <Container>
                        <ShareBox>
                            <SharePost>
                                {
                                    props.user && props.user.photoURL ?
                                        <img src={props.user.photoURL} /> :
                                        <img src="/images/user.svg" alt="" />
                                }
                                <button onClick={handleClick}
                                    disabled={props.loading ? true : false}
                                >Start a post</button>
                            </SharePost>

                            <ShareButton>
                                <button>
                                    <img src="/images/photo-share.png" alt="" />
                                    <span>Photo</span>
                                </button>

                                <button>
                                    <img src="/images/video.svg" alt="" />
                                    <span>Video</span>
                                </button>

                                <button>
                                    <img src="/images/event.png" alt="" />
                                    <span>Event</span>
                                </button>

                                <button>
                                    <img src="/images/article.png" alt="" />
                                    <span>Write article</span>
                                </button>
                            </ShareButton>
                        </ShareBox>
                        <Content>
                            {props.loading && <img src="/images/spin.svg" />}

                            {

                                props.articles.length > 0 &&
                                props.articles.map((article, key) => (
                                    <Article key={key}>
                                        <ShareActor>
                                            <a>
                                                <img src={article.actor.image} alt="" />
                                                <div>
                                                    <span>{article.actor.title}</span>
                                                    <span>{article.actor.description}</span>
                                                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                                </div>
                                            </a>
                                            <button>
                                                <img src="/images/ellipsis.png" alt="" />
                                            </button>
                                        </ShareActor>

                                        <Description>
                                            {article.description}
                                        </Description>
                                        <ShareImg>
                                            <a >
                                                {
                                                    !article.sharedImg && article.video ? <ReactPlayer width={"100%"} url={article.video} /> :
                                                        article.sharedImg && <img src={article.sharedImg} />
                                                }
                                            </a>

                                        </ShareImg>

                                        <SocialCount>
                                            <li>
                                                <button>
                                                    <img src="/images/like.png" alt="" />
                                                    <span>75</span>
                                                </button>
                                            </li>
                                            <li>
                                                <a>21 comments</a>
                                            </li>
                                        </SocialCount>
                                        <ActionArticle>

                                            <button>
                                                <img src="/images/like.png" alt="" />
                                                <span>Like</span>
                                            </button>

                                            <button>
                                                <img src="/images/comment.png" alt="" />
                                                <span>Comments</span>
                                            </button>

                                            <button>
                                                <img src="/images/share.jpg" alt="" />
                                                <span>Share</span>
                                            </button>

                                            <button>
                                                <img src="/images/sent.png" alt="" />
                                                <span>Sent</span>
                                            </button>
                                        </ActionArticle>
                                    </Article>
                                ))
                            }
                        </Content>
                        <PostModal showModal={showModal} handleClick={handleClick} />
                    </Container>
            }
        </>
    )
}


const Container = styled.div`
  grid-area: main;
`;


const CommomCard = styled.div`
    text-align: center;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    
`;


const ShareBox = styled(CommomCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background-color: #fff;
    padding: 14px 12px;
    
`;

const SharePost = styled.div`
    display: flex;
    align-items: stretch;
    margin:1em  0;
    img{
        width: 50px;
        border-radius: 50%;
        margin-right: 8px;
    }

    button{
        border: 1px solid rgba(0,0,0,0.15);
        background-color: #fff;
        flex-grow: 1;
        text-align: left;
        padding-left: 16px ;
        border-radius: 35px;
        font-size: 16px;
        color:rgba(0,0,0,0.7);
        font-weight: 600;

        
}
`;

const ShareButton = styled.div`
    display: flex;
    justify-content: space-around;
    
    button{
       
        margin: 10px 0;
        border:none;
        background-color: #fff;
        display: flex;
       
        align-items: center;

        &:hover{
            background-color:rgba(0,0,0,0.1);
        }

        span{
            color:rgba(0,0,0,0.6);
            font-size: 14px;
            font-weight: 700;
            padding-left: 4px;
        }
    }

    button>img{
        width: 30px;

    }
`;

const Article = styled(CommomCard)`

`;

const ShareActor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px ;
    position: relative;


    a{
        display: flex;
        overflow: hidden;
        padding-right:12px ;
        
        img{
            width:50px;
            margin-right: 8px;
        }

        div{
            display: flex;
            flex-direction: column;
            
            span{
                text-align: left;
                color: rgba(0,0,0,0.7);
                
                &:first-child{
                    font-weight: 600;
                }

            }
        }
    }

    button{
        margin-left: 5px;
        background-color: transparent;
        border: none;
        outline: none;
        position: absolute;
        right: 15px;
        top:0;

        img{
            width: 30px;
            
        }
    }
`;

const Description = styled.div`
    text-align: left;
    padding: 0 16px 16px;
    font-size: 15px;
    color: rgba(0,0,0,0.8);
    font-weight: 600;
    overflow: hidden;
`;

const ShareImg = styled.div`
    width: 100%;
    display: block;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 0 0 5px 5px;
    }
`;

const SocialCount = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;


    button{
        display: flex;
        align-items: center;
        margin: 5px 12px;
        background-color:transparent;
        border: none;

        span{
            font-size: 14px;
            font-weight: 600;
        }
    }

    img{
        width: 35px;
    }
    
    a{
        font-size: 15px;
        font-weight: 600;
    }
`;

const ActionArticle = styled.div`
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;

    button{
        border: none;
        cursor: pointer;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 2px;
        padding: 5px;
    }


    img{
        width: 30px;
    }
`;

const Content = styled.div`
    text-align: center;

    & > img{
         width: 30px;
    }
`;

const mapStateToProps = (state) => ({

    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles

})

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => dispatch(getArticleAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)