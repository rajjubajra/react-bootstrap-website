import React from 'react';
import Image from './Image';
import Text from './Text';


class Graphicdesign extends React.Component{
  
  render(props){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"><Text  graphicdesign={this.props.graphicdesign} /></div>
          <div className="col-md-6"><Image graphicdesign={this.props.graphicdesign} /></div>
        </div>
      </div>
    )
  }
}
export default Graphicdesign;