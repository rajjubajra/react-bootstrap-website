import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const Titleblock = styled.div`
margin-top: 100px;
width: 100%;
display: flex;
flex-direction: column;

h3{
  text-align: center;
}
`;


class Title extends React.Component{

  getTitleData = (props) => {
    const view = this.props.featureTitle.map((item)=> {
      return(<Titleblock key={item.nid}>
        <h3>{item.title}</h3>
        {ReactHtmlParser(item.field_features_brief)}
      </Titleblock>)
    });
    return view;
  }
  
  render(){ 
    return(
      <div className="row">
        <div className="col-md-12">
          {this.getTitleData()}
        </div>
        
      </div>
    )
  }
}
export default Title;