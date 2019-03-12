import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



const Button = () => (
<Btn>
  <h3>Get Quotation</h3>
  <button>Message us</button>
</Btn>
)
export default Button;