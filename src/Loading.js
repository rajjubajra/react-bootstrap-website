import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
section{
  display:flex;
  flex-direction: column;
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
                 <h1 style={{color: '#666', fontSize: '15vh'}}>
                 <i className="fas fa-spinner fa-pulse"></i></h1>
                 <p style={{color: '#666'}}>Loading..</p>
               </section>
               
           </div>
           <div className="right">
              
           </div>
  </section>
  </Page>
)
export default Loading;