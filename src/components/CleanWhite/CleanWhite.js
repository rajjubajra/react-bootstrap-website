import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import './style.css';

const SecNav = styled.section`
background-color: #ccc;
`;

class CleanWhite extends React.Component{


  render(props){
    const { logo } = this.props;
    return(
      <div className="container-fluid">
        <div className="row">
            <Navigation logo={logo} />
        </div>
      </div>
    )
  }

}
export default CleanWhite