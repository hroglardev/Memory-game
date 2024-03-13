import './Card.scss';

const Card = ({ image, name, race, ki }) => {
  return (
    <article>
      <div className='card-image-container'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <div className='char-info'>
        <p>Race: {race}</p>
        <p>Ki: {ki}</p>
      </div>
    </article>
  );
};
export default Card;
