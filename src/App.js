import React from 'react';


class Fetch extends React.Component {
//setting up state
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		}
	}

  //fetch api json arr of objects

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => res.json())
    .then(json => {
      this.setState({
        items: json,
        isloaded: true,  
      })
    }).catch((err) => {
      console.log(err);
  
    });
	}
  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) 
      // return <div>Loading...</div>;

	  return (
	    <div className="App">
	      <ul>
          {items.map(item => (
            <li key={item.id}>
              Name: {item.name} | Email: {item.email}
            </li>
          ))}
        </ul>
	    </div>
	  );
  }
}


export default Fetch;
