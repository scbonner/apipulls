import React from 'react';
import axios from 'axios';
import './AxiosHooks';

function AxiosHooks() {
  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url":  ("https://reqres.in/api/users/"),
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        // "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App">
        <br />
        <hr />
      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
        <button type='button' onClick={fetchData}>Click for Data</button>
      </header>
      <main>
        {responseData &&
          <blockquote>
            "{responseData && responseData.content}"
            <small>{responseData && responseData.originator && responseData.originator.name}</small>
          </blockquote>
        }
        </main>
      {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre> */}
    </div>
  );
}

export default AxiosHooks;


// fuction happyBirthday(myNaubme) {
//   for(let i = 0; i<myNumber.length; i+)

// }


//   }
// }

// let totalSum = [];
// function sum(myArr) {
//   for(let i = 0; i < myArr.length; i++)
//   firstNumber += listOfNumers[i]
// }
// return totalSum
// }
// const listOfNubers = [10, 1000, 25, 30, 1]
// console.log(myArr);