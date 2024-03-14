import Cards from '../../components/Cards/Cards';
import { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';

const Main = ({ handleClick }) => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Cards handleClick={handleClick} />
      </Suspense>
    </main>
  );
};
export default Main;
