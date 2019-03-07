import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
section{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

`;

const Loading = () => (
  <Page> 
   <section>
           <div className="left">
               <section>
                 <h1 style={{color: '#ff5722ad', fontSize: '6rem'}}><i className="fas fa-spinner fa-spin"></i>Loading...</h1>
               </section>
               
           </div>
           <div className="right">
              
           </div>
  </section>
  </Page>
)
export default Loading;