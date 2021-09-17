import React from 'react'
// import FetchClass from './FetchClass';
// import FetchHooks from './FetchHooks';
// import FetchHooks2 from './FetchHooks2';
// import AxiosHooks from './AxiosHooks';
// import ReactTask from './ReactTask'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'
// import Footer from './components/Footer'
import RandomPics from './RandomPics'


const App = () => {
//   const [showAddTask, setShowAddTask] = useState(true)
//   const [tasks, setTasks] = useState([])

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks()
//       setTasks(tasksFromServer)
//     }
//     fetchTasks()
//     //passing a dependency array
//   }, [])


//   //Fetch Tasks
//   const fetchTasks = async () => {
//     const res = await fetch('http://localhost:5000/tasks')
//     const data = await res.json()
    
//     return data
//   }

// // Add Task
// const addTask = (task) => {
//   const id = Math.floor(Math.random() * 10000) + 1
//   const newTask = { id, ...task }
//   setTasks([...tasks, newTask])
// }

// // Delete an individual task
// const deleteTask = async (id) => {
//   await fetch(`http://localhost:5000/tasks/${id}`, {
//     method: 'DELETE'

//   })
//   setTasks(tasks.filter((task) => task.id !== id))

// }

// // Toggle Reminder
// const toggleReminder = (id) => {
//   setTasks(
//     tasks.map((task) => 
//       task.id === id ? { ...task, reminder:
//       !task.reminder } : task
//       )
//     )
// }
  return(
	    <div>
	      {/* <ul>
            <li>Hello</li>
            <li>Goodbye</li>
            <br />
            <hr />
            <br />
          
          <Header 
          onAdd={() => setShowAddTask 
          (!showAddTask)} 
          showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? ( 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      ) : (
        'No Tasks To Show'
      )}
        </ul> */}
       <RandomPics />
        {/* <FetchClass />
          <FetchHooks />
          <FetchHooks2 />
          <AxiosHooks />
          <ReactTask />  */}
        </div>
      
      
  )
  }



export default App;
