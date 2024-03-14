import { useEffect, useState, lazy } from 'react';
const Card = lazy(() => import('../Card/Card'));
import FailFetch from '../FailFetch/FailFetch';
import Loading from '../Loading/Loading';
import './Cards.scss';
const Cards = ({ handleClick }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getChars = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://dragonball-api.com/api/characters?limit=12'
      );

      if (!response.ok) {
        const error = new Error('Failed to get the character cards');
        error.status = '404';
        throw error;
      }

      const chars = await response.json();
      setCharacters(chars.items);
      setError(null);
    } catch (error) {
      setError({
        message: error.message,
        status: error.status,
        image:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd5mhkt-e5f716c5-02f0-49cb-b556-cf40544d8beb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQ1bWhrdC1lNWY3MTZjNS0wMmYwLTQ5Y2ItYjU1Ni1jZjQwNTQ0ZDhiZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l1dHv7xS3LMUC6ZrDrv1Wb259AogcP9Ndh2Hn0luSlI'
      });
    } finally {
      setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        characters.length > 0 &&
        !isLoading &&
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
        ))
      )}
      {error !== null && (
        <FailFetch
          message={error.message}
          image={error.image}
          status={error.status}
        />
      )}
    </section>
  );
};
export default Cards;
