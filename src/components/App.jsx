import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HeaderComp } from './Header/Header';
import { Home } from './Sections/Home/Home';
import { About } from './Sections/About/About';
import { Adventages } from './Sections/Adventages/Adventages';
import { Partners } from './Sections/Partners/Partners';
import { Practices } from './Sections/Practices/Practices';
import { Charity } from './Sections/Charity/Charity';
import { Teams } from './Sections/Teams/Teams';
import { FooterComp } from './Footer/Footer';

export const App = () => {
  return (
    <HelmetProvider>
      <HeaderComp />
      <Suspense fallback={'Loading...'}>
        <main>
          <Home />
          <About />
          <Practices />
          <Teams />
          <Adventages />
          <Partners />
          <Charity />
        </main>
      </Suspense>
      <FooterComp />
    </HelmetProvider>
  );
};
