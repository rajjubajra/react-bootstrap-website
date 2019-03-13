import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const Box = styled.div`
margin: 30px 0px;
padding: 20px;
border: 0.01rem solid var(--light-1);
text-align: center;

    .fas, .fab, .fa, far{
      font-size: 3rem;
      padding: 20px;
      color: var(--dark-2);
      text-shadow: 1px 1px 1px #000;
    }

`;


class BrandIcons extends React.Component{

      mapData = (props) => {
        const view =   this.props.serviceBrands.map((item)=>{
        return(     
            <div className="col" key={item.nid}>
              <Box>
                <div>{ReactHtmlParser(item.field_service_fontawesome_icons)}</div>
                <h4>{item.field_service_brand_name}</h4>
              </Box>
            </div>
              )
          });
          return view;
      }

      render(){
        return(
          <div className="row">
              {this.mapData()}
          </div>
        )
      }
}
export default BrandIcons;