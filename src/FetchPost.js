// import React from 'react';


// // function to handle success
// function success() {
//     var data = JSON.parse(this.responseText); //parse the string to JSON
//     console.log(data);
// }

// // function to handle error
// function error(err) {
//     console.log('Request Failed', err); //error details will be in the "err" object
// }

// var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
// xhr.onload = success; // call success function if request is successful
// xhr.onerror = error;  // call error function if request failed
// xhr.open('GET', 'https://api.github.com/users/manishmshiva'); // open a GET request
// xhr.send(); // send the request to the server.

// // GET Request.
// fetch('https://api.github.com/users/manishmshiva')
//     // Handle success
//     .then(response => response.json())  // convert to json
//     .then(json => console.log(json))    //print data to console
//     .catch(err => console.log('Request Failed', err)); // Catch errors


// export default success;