import React from 'react';
import styled from 'styled-components';


const Section = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;




class Address extends React.Component{
  getAddress = (props) => {
    const view = this.props.address.map((item)=>{
      return <div key={item.nid}>{item.field_contact_information}</div>
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