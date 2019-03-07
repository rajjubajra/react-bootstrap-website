import React, { Component } from 'react';
import CleanWhite from './components/CleanWhite/CleanWhite';
import events from 'events';
import ajax from './Restapi/ajax';
import Loading from './Loading';
import logo from './logo.png';
import './App.css';



// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();


class App extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      scrollingText: [],
      isLoaded: false
    }
    this.refresh = this.refresh.bind(this)
  }

  componentWillMount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  componentWillUnmount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  async componentDidMount() {
    await this.refresh()
  }

  async refresh() {
    // AJAX fetch server/node/rest?_format=json and setState with the response data
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.get('/rest/images') // wait for the POST AJAX request to complete
      if (response.data) {
        // setState will trigger repaint
        this.setState({ 
                        images: response.data, 
                        
                      })
      }

      const scrollingText = await axios.get('/rest/scrollingtext') // wait for the POST AJAX request to complete
      if(scrollingText.data) {
        this.setState({
                   scrollingText: scrollingText.data,
                   isLoaded: true
        })
      }

      } catch (e) {
      alert(e)
    }
  }




  render() {
    
  console.log("SCROLLING TEXT", this.state.scrollingText);
    return (
      <div className="App">
        {this.state.isLoaded === true
        ?  <CleanWhite logo={logo} 
                images={this.state.images}
                scrollingText={this.state.scrollingText}
                />
        :  <Loading />
        }
       
      </div>
    );
  }
}

export default App;
