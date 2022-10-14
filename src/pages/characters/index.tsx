import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ICharacter } from "interfaces/ICharacter";
import Character from "Components/Character";

export default function Characters(){
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [person, setPerson] = useState<ICharacter>()
    const [nextUrl, setNextUrl] = useState('');
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/")
        .then(response => {
            setCharacters(response.data.results)
            console.log(response)
        })
        .catch(error=>console.log(error))
    },[]);
    function onClickCharacter(character:ICharacter){
        setPerson(character)
    }
    return(
        <>
            <div>
            {characters.map((chara)=>(
                <Button key={chara.name} onClick={()=>onClickCharacter(chara)}>{chara.name}</Button>
            ))}
            </div>
            <div>
                {person?.name === undefined? <h1 style={{height:"400px"}}>Select any character available above</h1> : <Character {...person}/>}
            </div>
        </>
    );
}