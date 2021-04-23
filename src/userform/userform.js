import { useState } from "react";

function Userform(){    //component,controller
    const [userform,setUserform]=useState({//useState-hook-predefined function
        name:'Ram',
        age:20
    })
    return(//view
        <div>
            <input value={userform.name} onChange={handleEventName}></input>
            <input value={userform.age} onChange={handleEventAge} placeholder='Age'></input>
            <button onClick={save}>Save</button>
        </div>
    )
    function save(){
        console.log(userform.name,userform.age);
    }
    function handleEventName(event){
        setUserform({
            name:event.target.value,
        })
    }
    function handleEventAge(event){
        setUserform({
            age:event.target.value,
        })
    }
}

export default Userform;