import '../App.css'

export default function Tables ({item}){

    let box = 'box'

    return (
        <div className={box}>
            <div>{item.mission_name}</div>
            <div>{item.launch_year}</div>
            <img src={item.links.mission_patch_small}/>

        </div>
    );
};
