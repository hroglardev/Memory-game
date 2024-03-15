import './FailFetch.scss';

const FailFetch = () => {
  return (
    <div className='error-container'>
      <p className='error-message'>
        Error: 404
        <span> Failed to get the character cards</span>
      </p>
      <div className='image-container'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd5mhkt-e5f716c5-02f0-49cb-b556-cf40544d8beb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQ1bWhrdC1lNWY3MTZjNS0wMmYwLTQ5Y2ItYjU1Ni1jZjQwNTQ0ZDhiZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l1dHv7xS3LMUC6ZrDrv1Wb259AogcP9Ndh2Hn0luSlI'
          alt='Veku'
          width='{400px}'
        />
      </div>
    </div>
  );
};
export default FailFetch;
