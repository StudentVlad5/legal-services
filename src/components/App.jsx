import { HeaderComp } from './Header/Header';
import { Home } from './Sections/Home/Home';
import { About } from './Sections/About/About';
import { Partners } from './Sections/Partners/Partners';
import { Practices } from './Sections/Practices/Practices';
import { Charity } from './Sections/Charity/Charity';
import { Teams } from './Sections/Teams/Teams';
import { Suspense } from 'react';
import { FooterComp } from './Footer/Footer';
import { Advantages } from './Sections/Advantages/Advantages';

export const App = () => {
  return (
    <>
      <HeaderComp />
      <Suspense fallback={'Loading...'}>
        <main>
          <Home />
          <About />
          <Practices />
          <Teams />
          <Advantages />
          <Partners />
          <Charity />
        </main>
      </Suspense>
      <FooterComp />
    </>
  );
};
