import {
  SectionTitle,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';
import {
  AboutContainer,
  AboutSection,
  AboutTitleGroup,
  DescriptionGroup,
  DescriptionHeading,
  TextBox,
  MasterLetter,
  AboutDescription,
  DescriptionItalic,
  Box,
  ImageBox,
  Gradient,
} from './About.styled';

import about_mob_png from 'images/about/about_mob.png';
import about_mob_2x_png from 'images/about/about_mob@2x.png';
import about_mob_webp from 'images/about/about_mob.webp';
import about_mob_2x_webp from 'images/about/about_mob@2x.webp';
import about_tab_png from 'images/about/about_tab.png';
import about_tab_2x_png from 'images/about/about_tab@2x.png';
import about_tab_webp from 'images/about/about_tab.webp';
import about_tab_2x_webp from 'images/about/about_tab@2x.webp';
import about_desk_png from 'images/about/about_desk.png';
import about_desk_2x_png from 'images/about/about_desk@2x.png';
import about_desk_webp from 'images/about/about_desk.webp';
import about_desk_2x_webp from 'images/about/about_desk@2x.webp';

export const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutTitleGroup $mobile>
          <SectionTitle>Про нас </SectionTitle>
          <Subtitle>Маєм доствід та репутацію</Subtitle>
        </AboutTitleGroup>
        <Box>
          <ImageBox>
            <picture>
              <source
                media="(min-width:1440px )"
                srcSet={`${about_desk_webp} 1x, ${about_desk_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width:768px)"
                srcSet={`${about_tab_webp} 1x, ${about_tab_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width:767.98px)"
                srcSet={`${about_mob_webp} 1x, ${about_mob_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                src={about_mob_png}
                alt="Будинок"
                srcSet={`${about_desk_png} 366w, ${about_desk_2x_png} 732w, ${about_tab_png} 220w, ${about_tab_2x_png} 440w, ${about_mob_2x_png} 193w, ${about_mob_png} 384w`}
                sizes="(min-width:1440px) 366px, (min-width:768px) 220px, (max-width:767.98px) 193px, 100vw"
                width="193"
                height="221"
                loading="lazy"
              />
            </picture>
            <Gradient />
          </ImageBox>
          <DescriptionGroup>
            <AboutTitleGroup>
              <SectionTitle>Про нас </SectionTitle>
              <Subtitle>Маєм доствід та репутацію</Subtitle>
            </AboutTitleGroup>
            <DescriptionHeading>
              <TextBox>
                <MasterLetter>A</MasterLetter>
                <AboutDescription>
                  двокатське об’єднання «Колегія адвокатів «Гранат» було
                  створено 09 березня 2011 року і об’єднує в собі адвокатів з
                  великим досвідом практичної роботи.
                </AboutDescription>
              </TextBox>
              <AboutDescription>
                Ми є неурядовою організацією, а об’єданням громадян за
                професійною ознакою.
              </AboutDescription>
            </DescriptionHeading>
            <DescriptionItalic>
              Основний напрямок діяльності це надання кваліфікованої правової
              допомоги громадянам, організаціям та підприємствам
            </DescriptionItalic>
            <AboutDescription>
              Більшість нашіх адвокатів мають певну правову спеціалізацію,
              завдяки чому, <span>Колегія адвокатів «Гранат» </span>може
              запропонувати послуги в будь-якій галузі права та надати
              кваліфіковану допомогу з різних питань фізичним та юридичним
              особам.
            </AboutDescription>
          </DescriptionGroup>
        </Box>
      </AboutContainer>
    </AboutSection>
  );
};
