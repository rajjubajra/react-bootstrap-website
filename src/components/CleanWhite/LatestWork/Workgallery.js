import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
 img{
  width: 100%;
  margin: 10px 0px;
  
 }

`;


const url = 'http://yellow-website.com'

class Workgallery extends React.Component{


    getImageData = (props) => {
      const view = this.props.workgallery.map((img)=>{
        return(
          <div className="col-md-4" key={img.nid}>
            <Image>
              <img src={url + img.field_latest_work_image} alt="images" />
            </Image>
            
          </div>
        )
      })
      return view;
    }

  render(){ 
  
    return(
     <div className="container-fluid">
       <div className="row">
         {this.getImageData()}
       </div>
     </div>
       
     
    )
  }
}
export default Workgallery;