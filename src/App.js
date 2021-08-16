import { useState } from 'react'
// import FetchClass from './FetchClass';
// import FetchHooks from './FetchHooks';
// import FetchHooks2 from './FetchHooks2';
// import AxiosHooks from './AxiosHooks';
// import ReactTask from './ReactTask'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


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


// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  console.log(id)
}

// Delete an individual task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))

}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
      )
    )
}
  return(
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
          <Header />
          <AddTask onAdd={addTask} />
          {tasks.length > 0 ? ( 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      ) : (
        'No Tasks To Show'
      )}
        </div>
  )
  }



export default App;
