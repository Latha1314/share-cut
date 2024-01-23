import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <ThirdwebProvider activeChain={{chainId:80001,rpc: ["https://rpc.ankr.com/polygon_mumbai"]}}> 
  <ThirdwebProvider    activeChain="mumbai"
  clientId="013aa3281b02f264125c5542e679031a" >

    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)