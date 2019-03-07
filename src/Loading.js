import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faSpinner } from '@fortawesome/free-solid-svg-icons'


library.add(faSpinner)

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
                 <h1 style={{color: '#ff5722ad', fontSize: '15vh'}}>
                 <FontAwesomeIcon icon="spinner" pulse/></h1>
                 <p style={{color: '#ff5722ad'}}>Loading..</p>
               </section>
               
           </div>
           <div className="right">
              
           </div>
  </section>
  </Page>
)
export default Loading;