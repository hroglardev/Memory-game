import Cards from '../../components/Cards/Cards';
import { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import FailFetch from '../../components/FailFetch/FailFetch';
const Main = ({ handleClick }) => {
  return (
    <main>
      <ErrorBoundary fallback={<FailFetch />}>
        <Suspense fallback={<Loading />}>
          <Cards handleClick={handleClick} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};
export default Main;
