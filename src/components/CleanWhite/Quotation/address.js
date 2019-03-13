import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';


const Section = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction: column;
justify-content: center;


p{
  line-height: 0.7rem;
}
p > i{
  padding: 0px 10px 0px 0px;
  color: var(--dark-2);
}
`;




class Address extends React.Component{
  getAddress = (props) => {
    const view = this.props.address.map((item)=>{
      return <p key={item.nid}>
        {ReactHtmlParser(item.field_contact_info_fontawesome_i)}
        {item.field_contact_information}
        </p>
    })
    return view;
  }

  

  render(){
    return(
      <Section>
        {this.getAddress()}
      </Section>
    )
  }
}
export default Address;