import { Button } from "@mui/material";
import axios from "axios";
import { IPlanet } from "interfaces/IPlanet";
import { useEffect, useState } from "react";

export default function Planets(){
  const[planets, setPlanets] = useState<IPlanet[]>([]);
  const [planet, setPlanet] = useState<IPlanet>();
  const [nextUrl, setNextUrl] = useState('');
  useEffect(()=>{
    axios.get('https://swapi.dev/api/planets/')
    .then(response => {
      setPlanets(response.data.results);
      setNextUrl(response.data.next);
    })
    .catch(error=>console.log(error));
  },[])
  
  function onClickPlanet(p:IPlanet){
    setPlanet(p);
  }

  return(
    <div>
      {planets.map((pla, index) =>(
        <Button key={index} onClick={()=>onClickPlanet(pla)}>{pla.name}</Button>
        ))}
        <h3>{planet?.name === undefined? <h1 style={{height:"400px"}}>Select any Planet available above</h1> : 'Planets: '+planet?.name}</h3>
      <h4>proximo: {nextUrl} </h4>
    </div>
  );
}