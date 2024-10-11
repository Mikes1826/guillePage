import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";

const Home = () =>{

        const [pokemonList, setPokemonList] = useState([]);
        let pokeApi = "https://pokeapi.co/api/v2/pokemon/";
    useEffect(() => {
        const fetchPokemon = async () => {

            const pokemonData = [];
            for(let i=1; i <= 200; i++) {
                try{
                    const response = await fetch(pokeApi + i);
                    const info = await response.json();
                    pokemonData.push(info);
                }catch (error) {
                    console.error("error fertching pokémon data: ", error);
                }
        }
        setPokemonList(pokemonData);
        console.log(pokemonData);
    };
    fetchPokemon();
},[]);

//console.log(pokemonList);

    return(
    <Layout>
        encuentra a DITTO tiene algo para vos si le das click
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
            pokemonList?.map((poke, index)=>(
                <Card key={index} data={poke}/>
            ))
        }
        </div>
        
    </Layout>
    );
};

export { Home };


/**

 */