import { Button } from "@mui/material";
import axios from "axios";
import { IVehicle } from "interfaces/IVehicle";
import { useEffect, useState } from "react"

export default function Vehicles(){
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [vehicle, setVehicle] = useState<IVehicle>();
  const [nextUrl, setNextUrl] = useState('');
  useEffect(()=>{
    axios.get("https://swapi.dev/api/starships/")
    .then(response =>{
      setVehicles(response.data.results);
      setNextUrl(response.data.next);
    })
    .catch(error => console.log(error));
  },[]);
  function onClickVehicle(veh:IVehicle){
    setVehicle(veh);
  }
  return(
    <div>
      {vehicles.map((veh, index)=>(
        <Button key={index} onClick={()=>onClickVehicle(veh)}>{veh.name}</Button>
      ))}
      <h3>{vehicle?.name === undefined? <h1 style={{height:"400px"}}>Select any Vehicle available above</h1>:'Vehicle: '+vehicle?.name}</h3>
      <h4>Next:{nextUrl}</h4>
    </div>
  );
}