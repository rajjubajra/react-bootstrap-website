import React from 'react';
import styled from  'styled-components';
import ReactHtmlParser from 'react-html-parser';


const Ul = styled.ul`
width: 100%;
min-height: 600px;
display:flex;
justify-content: space-between;
align-items: center;
text-align: center;


li{
  display: flex;
  width: 100%;
  margin: 10px;
  flex-direction: column;
}

.fas, .fab, fa{
    font-size: 4rem;
    padding: 70px 0px;
    border: 1px solid #ddd;
    margin-bottom: 30px;
}

h3{
    border: 1px solid #ddd;
    padding: 10px 0px;
}

`;

class Module extends React.Component{


  WorkFlowData = (props) => {
   
    const view = this.props.workflowmodule.map((item)=>{
      return(<li key={item.nid}>
        {ReactHtmlParser(item.field_workflow_icon)}
        <h3>{item.field_workflow_title}</h3>
      </li>);
    })
    return view ;
  }


  render(props){

    return(
        <Ul>
            {this.WorkFlowData()}
        </Ul>
    )
  }
}
export default Module;