import {useEffect,useState} from "react";
import User from "./user";
import {getUsers,getUser} from "../services/services";
import UserInfo from "./user.info";

export default function Users(){

    let [users,setUsers] = useState([])
    let [userID,setShow] = useState(null)



        const showUser =(id)=>{
        getUser(id).then(value => setShow(value))
    }



    useEffect(()=>{
        getUsers().then(value => setUsers(value))
    },[])



    return(<div>


        {

            users.map(user=>(<User item={user}
                show ={showUser}/>

            ))

        }

        <hr/>
       {JSON.stringify(userID)}
        <hr/>



    </div>)

}

