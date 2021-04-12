import React from 'react';
import FetchClass from './FetchClass';
import FetchHooks from './FetchHooks';
import FetchHooks2 from './FetchHooks2';
import AxiosHooks from './AxiosHooks';

class App extends React.Component {

    render() {

	  return (
	    <div className="App">
	      <ul>
            <li>Hello</li>
            <li>Goodbye</li>
            <br />
            <hr />
            <br />
          <FetchClass />
          <FetchHooks />
          <FetchHooks2 />
          <AxiosHooks />
        </ul>  
        </div>
        
      
	    
	  );
  }
}


export default App;
