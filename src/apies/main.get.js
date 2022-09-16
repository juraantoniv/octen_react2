
import React, {useState,useEffect} from 'react';
import getUrl from "../services/services";
import Tables from "./main.tables";
import '../App.css'
const MainGet = () => {

    let [api, getAp]= useState([])


    useEffect(()=>{
        getUrl().then(value =>
            getAp(value))
    },[])




    return (
        <div className={'boxAll'} >

            {

                api.filter(({launch_year}) => launch_year!=='2020').map(user=>(<Tables item={user}/>

                ))

            }

        </div>
    );
};

export default MainGet;