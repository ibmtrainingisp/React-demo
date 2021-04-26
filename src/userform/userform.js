import { useState } from "react";
import axios from "axios";

function Userform(){    //component,controller
    const [userform,setUserform]=useState({//useState-hook-predefined function
        name:'Ram',
        mobileNumber:1
    })
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
        </div>
    )
  
    function updateState(event){
        setUserform(
            Object.assign(userform,{
            [event.target.name]:event.target.value
        })
        );
    }
}

export default Userform;