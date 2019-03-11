import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
margin: 10px 0px;
background: var(--light-2);
height: 200px;
overflow: hidden;
padding: 20px;

    i{
      position: absolute;
      right: 30px;
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
              <h3>{item.title}</h3>
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