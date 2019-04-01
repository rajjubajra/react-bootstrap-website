import React from 'react';
import styled from 'styled-components';
import config from '../../../Restapi/config';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Form = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text-muted{
      height: 10px;
    }

    label{
      margin: 0px 0px 0px 2px;
      font-weight: 100;
      letter-spacing: 0.1rem;
    }

    div{
      width: 100%;
    }

    .form-control{
      border-radius: 0px;
    }

    ul.close{
      width: 20px;
      height: 35px;
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      cursor: pointer;
      border: 1px solid #ccc;
      
    }
   
    ul.close li{
      list-style: none;
    width: 20px;
    height: 2px;
    background-color: var(--dark-3);
    margin: 1px;
    }

    
    ul.close li:nth-child(1){
      -webkit-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      -webkit-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      transform: rotate(40deg);
      position: relative;
      right: 10px;
      top: 15px;
    }
    ul.close li:nth-child(2){
      -webkit-transform: rotate(-40deg);
      -ms-transform: rotate(-40deg);
      transform: rotate(-40deg);
      position: relative;
      top: 11px;
      right: 10px;
    }
    


`;

class MessageForm extends React.Component{
  state = {
    name: '',
    email: '',
    message: '',
    err_msg: false,
    sent_message: 'Message has been sent'
  }


  sentMessage =(event, props) => {
    event.preventDefault();
    if(this.state.name === '' && this.state.email === '' && this.state.message === '' )
    {
      this.setState({err_msg: 'Please enter blank field'});
    }else{
      this.setState({err_msg: false })
    }   

    if(this.state.err_msg === false){
      fetch( 'https://yellow-website.com/d8-api-provider/', {
          method: 'POST',
          format: 'json',
          authentication: 'basic_auth',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          })
        })

        this.props.messageForm();
    }




  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })



    
  }

  render(props){
    console.log(config);
    let err_msg = `${this.state.err_msg === false ? '' : this.state.err_msg} `;
    return(
      <Form>
        <div>
          <ul className="close" onClick={this.props.messageForm} title="Close Form">
            <li></li><li></li>
          </ul>
          <h3>Message Form: </h3>
        <form onSubmit={this.sentMessage}>
            <div className="form-group">
              <label htmlFor="InputName">Name</label>
              <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Enter name" 
                  onChange={this.handleOnChange}
                  required
              />
              <small id="namehelp" className="form-text text-muted">
                {this.state.name === '' ? err_msg : this.state.name}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail1">Email</label>
              <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Enter email" 
                  onChange={this.handleOnChange}
                  required
              />
              <small id="emailHelp" className="form-text text-muted">
                {this.state.email === '' ? err_msg : this.state.email}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Message</label>
              <textarea 
                  name="message"
                  className="form-control" 
                  placeholder="Message"
                  rows="3"
                  onChange={this.handleOnChange}
                  required
              >
              </textarea>
              <small id="emailHelp" className="form-text text-muted">
                {this.state.message.length > 0 ? this.state.message.substring(50,0) : ''}
              </small>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
      </Form>
    )
  }
}
export default MessageForm;

