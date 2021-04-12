import React, { useState, useEffect } from 'react';
// import './App.css';

// function useFetch(url, defaultResponse) {
//   const [data, setData] = useState(defaultResponse);

//   async function getDataFromAPI() {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       setData({
//         isLoading: false,
//         data
//       });
//     } catch (e) {
//       console.error(e);
//       setData({
//         isLoading: false,
//         data: e
//       });
//     }
//   }

//   useEffect(() => {
//     getDataFromAPI()
//   }, []);

//   return data;
// }

// export default function App() {
//   const randomID = Math.floor((Math.random() * 10) + 1);
//   const apiEndpoint = `https://reqres.in/api/users/${randomID}`;
//   const userFetchResponse = useFetch(apiEndpoint, {isLoading: true, data: null});

//   if (!userFetchResponse.data || userFetchResponse.isLoading) {
//     return 'Loading...';
//   }

//   const {first_name, last_name, avatar} = userFetchResponse.data.data;

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <div>
//             <h3>Name: {first_name} {last_name}</h3>
//             <div><img src={avatar} alt="avatar" /></div>
//           </div>
//       </header>
//     </div>
//   );
// }

const FetchHooks = ()=> {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true); 
    useEffect(() =>{    //will invoke, fetch data
       //will code another example, async and await. Make sure it is placed within your function.
       (async ()=>{
           //get response back
           const res = await fetch('https://jsonplaceholder.typicode.com/posts');
           const data = await res.json();
           setTimeout(()=>{
                setData(data.splice(0,10));
                setIsLoading(false);
           },3000);
           
        })(); //setting up an immediate envoking or calling/})

        
        
        
        // fetch('https://jsonplaceholder.typicode.com/posts')  //returns a promise
        //     .then((res) => res.json())   //receives response
        //     .then((data) => setData(data.splice(0,10)));   //return response, updating state to print out only 10 posts out of the 100.

    },[])  //empty arr, function to evoke once

//display data
    return(
        <div>
            {isLoading ? <div>Loading</div> :
            <ul>
                <br />
                <hr />
                {data.map((item)=>{
                    return <li key={item.id}>{item.body}</li>
                })}
            </ul>
            }
        </div>
    )
}

export default FetchHooks;