import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
margin: 80px 0px 50px 0px;
width: 100%;
display: flex;
flex-direction: column;

h2{
  text-align: center;
}
`;


class NewsTitle extends React.Component{

  render(){
    return(   
          <Title>
            <h2>Latest News</h2>
            <a href="" className="read-all-button">Read All News Blog</a>
          </Title>  
    )
  }
}
export default NewsTitle;