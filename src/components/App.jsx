import { Suspense } from 'react';
import { HeaderComp } from './Header/Header';
import { Home } from './Sections/Home/Home';
import { About } from './Sections/About/About';
import { Adventages } from './Sections/Adventages/Adventages';
import { Partners } from './Sections/Partners/Partners';
import { Practics } from './Sections/Practics/Practics';
import { Charity } from './Sections/Charity/Charity';
import { Teams } from './Sections/Teams/Teams';
import { FooterComp } from './Footer/Footer';

export const App = () => {
  return (
    <>
      <HeaderComp />
      <Suspense fallback={'Loading...'}>
        <main>
          <Home />
          <About />
          <Practics />
          <Teams />
          <Adventages />
          <Partners />
          <Charity />
        </main>
      </Suspense>
      <FooterComp />
    </>
  );
};
