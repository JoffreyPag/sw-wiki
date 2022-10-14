import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ICharacter } from "interfaces/ICharacter";
import "./Character.css"
const Character = (character: ICharacter) => {
  return (
    <Card className="Card" variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">{character.name}</Typography>
        <Typography paragraph> Birth Year: {character.birth_year} </Typography>
        <Typography paragraph> Height: {character.height} </Typography>
        <Typography paragraph> Mass: {character.mass} </Typography>
        <Typography paragraph> Hair Color: {character.hair_color} </Typography>
        <Typography paragraph> Skin Color: {character.skin_color} </Typography>
        <Typography paragraph> Eye Color: {character.eye_color} </Typography>
        <Typography paragraph> Gender: {character.gender} </Typography>
        <Typography paragraph> ----------------- </Typography>
        <Typography paragraph> Created: {character.created} </Typography>
        <Typography paragraph> Edited: {character.edited} </Typography>
      </CardContent>
    </Card>
  )
}
export default Character;