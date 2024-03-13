import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
const Cards = () => {
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

  console.log(characters);
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
          />
        ))}
    </section>
  );
};
export default Cards;
