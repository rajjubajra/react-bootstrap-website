import React from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import Example from './Box';
import ReactHTMLParser from 'react-html-parser';

const Pages = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--light-1);

      section{
          width: 100%;
          height: 100vh;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;


          div.item-list > ul > li{
            list-style: none;
          }
      }



`;

class Landing extends React.Component{
  


  render(props){
    const {bg_2, scrollingText} = this.props;
    return(
      <Pages>
        <section>
         
         <Carousel bg_2={bg_2}  scrollingText={scrollingText} /> 
        </section>
      </Pages>  
    )
  }


}
export default Landing;