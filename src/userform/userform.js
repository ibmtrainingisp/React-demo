import { useState } from "react";
import axios from "axios";
import UserList from "../userlist/userlist";

function Userform(){    //component,controller
    const [userform,setUserform]=useState({//useState-hook-predefined function
        name:'Lucky',
        mobileNumber:"78"
    })
    const [users,setUsers]=useState([{name:"Indhu",mobileNumber:"89"}]);
    const save=function (){
        console.log(userform.name,userform.mobileNumber);
        axios   //fetch
        .post('http://localhost:8083/user',userform)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    };
    return(//view   //JSX
        <div>
            <input value={userform.name} name='name' onChange={updateState}></input>
            <input value={userform.mobileNumber} name='mobileNumber' onChange={updateState} placeholder='Age'></input>
            <button onClick={save}>Save</button>
            <UserList userProps={users}></UserList>
        </div>
    )
  
    function updateState(event){
            const current={...userform  //spread operator
            ,[event.target.name]:event.target.value};
        console.log(current);
        setUserform(current);
    }
}

export default Userform;