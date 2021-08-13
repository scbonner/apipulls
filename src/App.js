import { useState } from 'react'
// import FetchClass from './FetchClass';
// import FetchHooks from './FetchHooks';
// import FetchHooks2 from './FetchHooks2';
// import AxiosHooks from './AxiosHooks';
// import ReactTask from './ReactTask'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Lunch Meeting",
        "day": "Feb 13th at 12:30pm",
        "reminder": true
      },

])

	  return (
	    <div className="container">
	      {/* <ul>
            <li>Hello</li>
            <li>Goodbye</li>
            <br />
            <hr />
            <br />
          <FetchClass />
          <FetchHooks />
          <FetchHooks2 />
          <AxiosHooks />
          <ReactTask /> */}
          <Header title='Task Tracker' />
          <Tasks tasks={tasks} /> 
        {/* </ul>   */}
        </div>
	  );
  }



export default App;
