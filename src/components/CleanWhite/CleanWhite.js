import React from 'react';
import Navigation from './Navigation/Navigation';
import Landing from './Landing/Landing';
import Services from './Services/Services';
import styled from 'styled-components';
import './style.css';


class CleanWhite extends React.Component{
  constructor(){
    super();
    this.state = {
      landingPageBg: '',
    
    }
  }


  componentDidMount(props){
    const {images, scrollingText } = this.props;
    const url =  'http://yellow-website.com';
    images.map((image)=>{
        image.field_image_name === 'bg-2' && this.setState({landingPageBg: 
          url + image.field_image_rest_api})
    });

    

  }


  render(props){
    const { logo, scrollingText  } = this.props;
    console.log('CLEANWHITE SCROLLING TEXT', scrollingText);
    return(
      <div className="container-fluid">
        <div className="row index-at-top">
            <Navigation logo={logo} />
        </div>
        <div className="row">    
            <Landing 
                bg_2={this.state.landingPageBg} 
                images={this.props.images}
                scrollingText={scrollingText}
                />
        </div>
        <div className="row">
            <Services />
        </div>
      </div>
    )
  }

}
export default CleanWhite