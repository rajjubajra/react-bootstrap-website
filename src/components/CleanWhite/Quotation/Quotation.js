import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Address from './address';

const Section = styled.div`

`;



class Quotation extends React.Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Button />
          </div>
          <div className="col-md-6">     
              <Address address={this.props.address} />
          </div>
        </div>
      </div>
    )
  }
}
export default Quotation;