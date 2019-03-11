import React from 'react';
import Brief from './Brief';
import Title from './Title';


class Features extends React.Component{

  

  render(props){
  
    return(
      <div className="container-fluid">
        
          <Title featureTitle={this.props.featureTitle} />
          <Brief features={this.props.features} />
        
      </div>
    )
  }
}
export default Features;