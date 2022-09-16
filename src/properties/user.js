import '../App.css'

export default function User ({item,show}){

    return (
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <button onClick={()=>{
               show(item.id)
            }}></button>
        </div>
    );
};

