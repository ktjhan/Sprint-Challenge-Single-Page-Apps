import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  padding: 5px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ContentCenter>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to= {'/CharacterList'}>
          <button>Rick & Morty Characters!</button>
        </Link>
        </ContentCenter>
      </header>
    </section>
  );
}
