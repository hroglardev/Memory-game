import './Card.scss';

const Card = ({ id, image, name, race, ki, handleClick, shuffle }) => {
  return (
    <article
      onClick={() => {
        handleClick(id);
        shuffle();
      }}>
      <div className='card-image-container'>
        <img src={image} alt={name} loading='lazy' />
      </div>
      <h3>{name === 'Celula' ? 'Cell' : name}</h3>
      <div className='char-info'>
        <p>Race: {race}</p>
        <p>Ki: {ki}</p>
      </div>
    </article>
  );
};
export default Card;
