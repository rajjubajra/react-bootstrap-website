import React from 'react';
import styled from 'styled-components';

const Section = styled.section`

width: 100%
min-height: 300px;
margin-top: 100px;
margin-bottom: 100px;

div.reviews{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    width: 50%;
  }
}

ul.review-nav{
  display: flex;
}
`;


class Reviews extends React.Component{

  render(){
    return(
      <Section>
        <div className="reviews">
            <h3>Reviews</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque magni fugiat expedita mollitia impedit incidunt. Atque, sed voluptate! Reiciendis commodi.</p>
            <i>Expdita Mllitia</i>
            <ul className="review-nav"><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        </div>
      </Section>
    )
  }
}
export default Reviews;