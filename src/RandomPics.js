import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
//import styled from 'styled-components'
import {  Box, SimpleGrid } from "@chakra-ui/react"



//1**. create TeamDirectoy function
//2**. Get TD data from firebase into an array
//**3. Place array data inside state

//**4. Render all team members info into team member cards**

//5. onClick team member takes you to a route that is at directoy id
//6. Create team member component that displays team member's info from firebase
//7. When routing to team member container use params to pull individual team member from firebase
//8. Render individual team member inside of member component
//  useState let us keep local state in a function component
//9. Allow team members to edit if they are logged into my page
//10. useState Hook declares a state variable called diectory (same as this.state in a class).
//one person card
// export const Grid = styled.div`

// `;
//displays directory pictures

// export const Row = styled.div`
//   display: flex;
// `;

// export const Col = styled.div`
//   flex: ${(user) => user.auto}
// `;

function RandomPics(user) {
  console.log('user info', user)
  const [users, setUsers] = useState(null);   //Declare a new state variable, which we'll call "users", set at null


    useEffect(() => {
      axios.get("https://randomuser.me/api/?results=10")
      .then(response => setUsers(response.data.results));

    }, [])

      if (!users) return null;
        
  return (
    <>
      {/* <HeaderTitle /> */}
        <SimpleGrid columns={3} spacing={8}>
          
        {users.map(user => {
            return (
                <Box maxW='xs' borderWidth='1px' overflow='hidden'>
                <Box maxW='xs' borderWidth='1px' overflow='hidden'>
                    <img src={user.picture.small} alt='random pics of male female' />
                </Box>
                    <h4>{user.name.first}</h4>
                        <p>{user.location.city}, {user.location.state}</p>
                        <p>{user.gender}</p>
                </Box>    
        );
      })}
        </SimpleGrid>
    </>
    );
}


export default RandomPics

