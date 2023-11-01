import {
  SectionTitle,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';
import {
  CharityContainer,
  CharitySection,
  CharityTitleGroup,
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
import { useTranslation } from 'react-i18next';

export const Charity = () => {
  const { t } = useTranslation();

  return (
    <CharitySection id="charity">
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
            <DescriptionHeading>
              <CharityTitleGroup $mobile>
                <SectionTitle>{t("Благодійність")}</SectionTitle>
                <Subtitle>{t("Маємо досвід та репутацію")}</Subtitle>
              </CharityTitleGroup>
              <CharityTitleGroup>
                <SectionTitle>{t("Благодійність")}</SectionTitle>
                <Subtitle>{t("Маємо досвід та репутацію")}</Subtitle>
              </CharityTitleGroup>
              <TextBox>
                <MasterLetter>A</MasterLetter>
                <CharityDescription>
                  {t("двокатське об’єднання «Колегія адвокатів «Гранат»")}
                </CharityDescription>
              </TextBox>
              <CharityDescription>{t("Наше адвокатське об'єднання займається різними видами благодійної діяльності, спрямованої на підтримку різних груп людей або справ. Ось декілька  напрямків благодійної діяльності для адвокатського об'єднання:")}</CharityDescription>
            </DescriptionHeading>
            <DescriptionItalic>{t("Правова допомога безкоштовно:")}</DescriptionItalic>
            <CharityDescription>{t("Адвокати надають безкоштовну правову допомогу незаможним клієнтам, особам з обмеженими можливостями, жертвам насильства чи іншим потребуючим. Ця діяльність включає в себе консультації, підготовку документів і захист в суді.")}</CharityDescription>
            <DescriptionItalic>{t("Освіта і навчання:")}</DescriptionItalic>
            <CharityDescription>{t("Адвокатське об'єднання організовує семінари, лекції та інші освітні заходи, щоб підвищити правову грамотність громади і надати інформацію про їх права та обов'язки.")}</CharityDescription>
            <DescriptionItalic>{t("Підтримка громадських організацій:")}</DescriptionItalic>
            <CharityDescription>{t("Адвокати надає безкоштовну або знижену ціну правових послуг громадським організаціям, які працюють в сферах благодійності, захисту прав людини, екології тощо.")}</CharityDescription>
            <DescriptionItalic>{t("Участь у правозахисних програмах:")}</DescriptionItalic>
            <CharityDescription>{t("Адвокатське об'єднання бере участь у програмах правозахисту та захисту прав людини, включаючи захист прав меншин, біженців, іммігрантів та інших уразливих груп.")}</CharityDescription>
            <DescriptionItalic>{t("Публікація інформаційних матеріалів:")}</DescriptionItalic>
            <CharityDescription>{t("Наші адвокати є авторами статей, брошур та відео, щоб поширювати правову інформацію серед громади та допомагати людям розуміти їх права та обов'язки.")}</CharityDescription>
            <DescriptionItalic>{t("Благодійність")}</DescriptionItalic>
            <CharityDescription>{t("Адвокатське об'єднання фінансово підтримує різні благодійні організації та проекти, що сприяють розвитку громади та покращенню умов життя в ній.")}</CharityDescription>
        </Box>
      </CharityContainer>
    </CharitySection>
  );
};
