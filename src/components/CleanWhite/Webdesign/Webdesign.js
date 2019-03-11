import React from 'react';
import Image from './Image';
import Text from './Text';


class Webdesign extends React.Component{
  
  render(props){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"><Image webdesign={this.props.webdesign} /></div>
          <div className="col-md-6"><Text  webdesign={this.props.webdesign} /></div>
        </div>
      </div>
    )
  }
}
export default Webdesign;