import '../App.css'

export default function UserInfo ({item}){

    return (
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>{item.email}</div>
        </div>
    );
};