import React from 'react';
import FetchClass from './FetchClass';
import FetchHooks from './FetchHooks';
import FetchHooks2 from './FetchHooks2';
import AxiosHooks from './AxiosHooks';
import ReactTask from './ReactTask'
import Header from './components/Header'


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
          <ReactTask />
          <Header title='Getting Close' greeting='You Go Girl!' />
        </ul>  
        </div>
        
      
	    
	  );
  }
}


export default App;
