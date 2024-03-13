import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
const Cards = ({ handleClick }) => {
  const [characters, setCharacters] = useState([]);

  const getChars = async () => {
    try {
      const chars = await fetch(
        'https://dragonball-api.com/api/characters?limit=12'
      )
        .then((response) => response.json())
        .then((data) => data.items);

      setCharacters(chars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChars();
  }, []);

  const shuffle = () => {
    setCharacters(characters.slice().sort(() => 0.5 - Math.random()));
  };

  return (
    <section className='cards-container'>
      {characters.length > 0 &&
        characters.map((character) => (
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
