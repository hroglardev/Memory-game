import { Suspense, useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
import useSWR from 'swr';
import { getChars } from '../../helpers/fetch';

const Cards = ({ handleClick }) => {
  const [chars, setChars] = useState([]);
  const { data: characters } = useSWR(
    'https://dragonball-api.com/api/characters?limit=12',
    getChars,
    {
      suspense: true
    }
  );

  useEffect(() => {
    setChars(characters.items);
  }, []);

  const shuffle = () => {
    setChars(chars.slice().sort(() => 0.5 - Math.random()));
  };

  return (
    <section className='cards-container'>
      {chars.map((character) => (
        <Card
          key={character.id}
          image={character.image}
          name={character.name}
          race={character.race}
          ki={character.ki}
          handleClick={handleClick}
          shuffle={shuffle}
          id={character.id}
        />
      ))}
    </section>
  );
};
export default Cards;
