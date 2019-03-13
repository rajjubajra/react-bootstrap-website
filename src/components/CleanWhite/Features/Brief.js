import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
margin: 10px 0px;
height: 200px;
overflow: hidden;
padding: 20px;

    i{
      position: absolute;
      right: 36px;
      font-size: 2rem;
    }

    p{
      text-align: justify;
      margin-top: 20px;
    }
`;


class Brief extends React.Component{

  getData = (props) => {
    const view = this.props.features.map((item)=>{
        return(
          <div className="col-md-4" key={item.nid}>
            <Section>
              {ReactHtmlParser(item.field_feature_fontawesome_icon)}
              <h4>{item.title}</h4>
              {ReactHtmlParser(item.field_features)}
            </Section>
          </div>
        )
    });
    return view;
  }


  render(){
    return(
     <div className="row">
       {this.getData()}
     </div>
    )
  }
}
export default Brief;