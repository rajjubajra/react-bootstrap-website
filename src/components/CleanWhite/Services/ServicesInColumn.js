import React from 'react';
import styled from 'styled-components';
import ReactHttpParser from 'react-html-parser';

const Box = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: var(--light-1);
  
  h3{
    text-align: center;
    padding: 20px 10px;  
  }
  p{
    text-align: justify;
    padding: 10px 10px;
  }
`;


class ServicesInColumn extends React.Component{
  
  mapServiceData = (props) => {
    //console.log('data', this.props.services);
      const view = this.props.services.map((item) => {
          return(
            <div className="col-md-4" key={item.nid}>
              <Box>
                <h3>{item.title}</h3>
                <p>{ReactHttpParser(item.field_services_contents.substring(200,0))}</p>
              </Box>
            </div>
          )
      })

      return view;
  }

  render(){
    return(
      <div className="row">
          {this.mapServiceData()}
      </div>
    )
  }
}
export default ServicesInColumn;