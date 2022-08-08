import { GetCharacterResults } from "../../types";

const CharacterPage = () => {
return(
    <div>character page</div>
)
}


export async function getStaticPaths() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const {results}: GetCharacterResults = await res.json();
    
    return {
        paths: results.map((character) => {
            return {params: {id: String(character.id)}};

            
        }),
    }
}


export async function getStaticProps({params}:{
    id:string
}) {
    
}

export default CharacterPage;