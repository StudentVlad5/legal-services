import {
  SectionTitle,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';
import {
  CharityContainer,
  CharitySection,
  CharityTitleGroup,
  DescriptionGroup,
  DescriptionHeading,
  TextBox,
  MasterLetter,
  CharityDescription,
  DescriptionItalic,
  Box,
  ImageBox,
  Gradient,
} from './Charity.styled';

import mother_mob_png from 'images/charity/mother_desk_1x_png.png';
import mother_mob_2x_png from 'images/charity/mother_desk_2x_png.png';
import mother_mob_webp from 'images/charity/mother_mob_1x_webp.webp';
import mother_mob_2x_webp from 'images/charity/mother_mob_2x_webp.webp';
import mother_tab_png from 'images/charity/mother_tab_1x_png.png';
import mother_tab_2x_png from 'images/charity/mother_tab_2x_png.png';
import mother_tab_webp from 'images/charity/mother_tab_1x_png.webp';
import mother_tab_2x_webp from 'images/charity/mother_tab_2x_png.webp';
import mother_desk_png from 'images/charity/mother_desk_1x_png.png';
import mother_desk_2x_png from 'images/charity/mother_desk_2x_png.png';
import mother_desk_webp from 'images/charity/mother_desk_1x_png.webp';
import mother_desk_2x_webp from 'images/charity/mother_desk_2x_png.webp';

export const Charity = () => {
  return (
    <CharitySection>
      <CharityContainer>
        <Box>
          <ImageBox>
            <picture>
              <source
                media="(min-width:1440px )"
                srcSet={`${mother_desk_webp} 1x, ${mother_desk_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width:768px)"
                srcSet={`${mother_tab_webp} 1x, ${mother_tab_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width:767.98px)"
                srcSet={`${mother_mob_webp} 1x, ${mother_mob_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                src={mother_mob_png}
                alt="Батьківщина-мати"
                srcSet={`${mother_desk_png} 366w, ${mother_desk_2x_png} 732w, ${mother_tab_png} 220w, ${mother_tab_2x_png} 440w, ${mother_mob_2x_png} 193w, ${mother_mob_png} 384w`}
                sizes="(min-width:1440px) 366px, (min-width:768px) 220px, (max-width:767.98px) 193px, 100vw"
                width="193"
                height="221"
                loading="lazy"
              />
            </picture>
            <Gradient />
          </ImageBox>
          <DescriptionGroup>
            <DescriptionHeading>
              <CharityTitleGroup $mobile>
                <SectionTitle>БЛАГОДІЙНІСТЬ</SectionTitle>
                <Subtitle>Маєм доствід та репутацію</Subtitle>
              </CharityTitleGroup>
              <CharityTitleGroup>
                <SectionTitle>БЛАГОДІЙНІСТЬ</SectionTitle>
                <Subtitle>Маєм доствід та репутацію</Subtitle>
              </CharityTitleGroup>
              <TextBox>
                <MasterLetter>A</MasterLetter>
                <CharityDescription>
                  двокатське об’єднання «Колегія адвокатів «Гранат»
                </CharityDescription>
              </TextBox>
              <CharityDescription>Перший розділ</CharityDescription>
            </DescriptionHeading>
            <DescriptionItalic>Основний напрямок</DescriptionItalic>
            <CharityDescription>Другий розділ</CharityDescription>
          </DescriptionGroup>
        </Box>
      </CharityContainer>
    </CharitySection>
  );
};
