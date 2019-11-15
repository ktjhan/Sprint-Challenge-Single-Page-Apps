import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const ContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [gotData, changeData] = useState([])

   const search = characterArray => {
     changeData(characterArray)

 };

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characterInfo = response.data.results;
        console.log("You've gotten the character information", characterInfo);
        setCharacters(characterInfo);
        changeData(characterInfo);
      })
      .catch(error => {
        console.log("Booooo.... data was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <ContentCenter>
        <h2>Character List</h2> 
        <Link to={"/"}>
        <button>Home</button>
        </Link>
        <SearchForm search={search} characters={characters} /> 
      </ContentCenter>
        {gotData.map(char => {
          return (
            <CharacterCard
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            type={char.type}
            image={char.image}
            />
          )
        })}

    </section>
  );

}
