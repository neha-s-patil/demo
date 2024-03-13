import React ,{useState} from 'react';

const Mycomp=()=>{

    const [query,setQuery]= useState("");

    const handleChange=(e)=>{
        setQuery(e.target.value);
    }

    const users=[{id:1, name:"Neha"},
    {id:2, name:"Kerti"},
    {id:3, name:"mock Name"}
]
    const filteredRes= users.filter((user)=>
        user.name.toLowerCase().includes(query.toLowerCase())
    );
       return (<>
            <input placeholder="demo" type="text" value={query} onChange={handleChange}/>
        <ul>
        {filteredRes.map((user)=>( <li> {user.name}</li>))}
        </ul>

            </>);
}

export default Mycomp;