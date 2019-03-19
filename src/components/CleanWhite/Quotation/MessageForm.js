import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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


  render(props){
    return(
      <Form>
        <div>
          <ul className="close" onClick={this.props.messageForm} title="Close Form">
            <li></li><li></li>
          </ul>
          <h3>Message Form: </h3>
        <form>
            <div className="form-group">
              <label for="InputName">Name</label>
              <input type="text" class="form-control" id="Inputname" aria-describedby="nameHelp" placeholder="Enter name" />
              <small id="namehelp" class="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label for="InputEmail1">Email</label>
              <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label for="InputPassword1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button>Submit</button>
        </form>
        </div>
        
      </Form>
    )
  }
}
export default MessageForm;

