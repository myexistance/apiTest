import './App.css';
// import axios
import Axios from "axios";
import { useState } from 'react';


function App() {

const [name,setName] = useState("");
// const [canrelist, setCanrelist] = useState("");
// const [description, setDescription] = useState("");





//fetch API using axios
Axios.get("https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false").then((res) => {
  setName(res.data.Name);
});
  return (
    <div className="App">
        
        <p>Name: {name}</p> 
  
    </div>
  );
}


export default App;
