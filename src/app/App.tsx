import React from 'react';
import { Provider } from 'jotai'; 
import Router from 'pages/router/Router';


const App: React.FC = () => {
  return (
    <Provider>
      <Router/>
    </Provider>
  );
};

export default App;
