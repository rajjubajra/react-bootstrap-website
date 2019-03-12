import React from 'react';
import './style.css';
import Navigation from './Navigation/Navigation';
import Landing from './Landing/Landing';
import Services from './Services/Services';
import CallAction from './CallAction/CallAction';
import Workflow from './Workflow/Workflow';
import LatestWork from './LatestWork/LatestWork';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Webdesign from './Webdesign/Webdesign';
import Graphicdesign from './Graphicdesign/Graphicdesign';
import News from './News/News';
import Subscription from './Subscription/Subscription';
import Contact from './Contact/Contact';
import Quotation from './Quotation/Quotation';


class CleanWhite extends React.Component{
  constructor(){
    super();
    this.state = {
      landingPageBg: '',
    }
  }


  componentDidMount(props){
    const {images } = this.props;
    const url =  'http://yellow-website.com';
    images.map((image)=>{
      return  image.field_image_name === 'bg-2' 
        && this.setState({landingPageBg: url + image.field_image_rest_api})
    });
  }


  render(props){
    const { logo  } = this.props;
    
    return(
      <div className="container-fluid">
        <div className="row index-at-top">
            <Navigation logo={logo} />
        </div>
        <div className="row">    
            <Landing 
                bg_2={this.state.landingPageBg} 
                images={this.props.images}
                scrollingText={this.props.scrollingText}
                />
        </div>
        <div className="row">
            <Services 
                serviceBrands={this.props.serviceBrands} 
                services={this.props.services}
            />
        </div>
        <div className="row">
          <CallAction 
              callAction={this.props.callAction} 
              images={this.props.images}
          />
        </div>
        <div className="row">
          <Workflow 
              workflowmodule={this.props.workflowmodule} 
              workflow={this.props.workflow}
          />
        </div>
        <div className="row">
          <LatestWork 
              latestwork={this.props.latestwork}
              workgallery={this.props.workgallery}
          />
        </div>

        <div className="row">
          <Features 
              featureTitle={this.props.featureTitle}
              features={this.props.features}
          />
        </div>
        <div className="row">
          <Reviews />
        </div>
        <div className="row">
          <Webdesign webdesign={this.props.webdesign} />
        </div>
        <div className="row">
          <Graphicdesign graphicdesign={this.props.graphicdesign} />
        </div>
        <div className="row">
          <News latestnews={this.props.latestnews} />
        </div>
        <div className="row">
          <Subscription />
        </div>
        <div className="row">
          <Contact  contactinformation={this.props.contactinformation} />
        </div>
        <div className="row">
          <Quotation address={this.props.contactinformation} />
        </div>
      </div>
    )
  }

}
export default CleanWhite