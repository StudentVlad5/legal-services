import { HeaderComp } from './Header/Header';
import { Home } from './Sections/Home/Home';
import { About } from './Sections/About/About';
import { Contact } from './Sections/Contact/Contact';
import { Practics } from './Sections/Practics/Practics';
import { Members } from "./Sections/Members/Members";
import { Сharity } from "./Sections/Сharity/Сharity";
import { Suspense } from 'react';
import { FooterComp } from './Footer/Footer';

export const App = () => {
  return (
    <>
    <HeaderComp />
    <div style={{display:"flex"}}>
      <Suspense fallback={'Loading...'}>
        <main>
          <Home/>
          <About />
          <Practics/>       
          <Members/>
          <Contact/>
          <Сharity/>
        </main>
      </Suspense>
    </div>
    <FooterComp />
  </>
  );
};
