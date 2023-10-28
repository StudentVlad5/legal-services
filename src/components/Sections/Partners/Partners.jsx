import {
  PartnerContainer,
  PartnerSection,
  PartnerItemContainer,
  PartnerItem,
  PartnerImg,
  PartnerImgWrap,
  ItemContentContainer,
  ItemContentTitle,
  ItemContent,
  // BackgroundSvgVectorContainer,
  // BackgroundSvgVector,
  PartnerTitleGroup,
} from './Partners.styled';
import img1 from 'images/partners/zbk1.webp';
import img2 from 'images/partners/petrus.webp';
import img3 from 'images/partners/svit_it.webp';
import img4 from 'images/partners/ptz.webp';
import img5 from 'images/partners/extrime.webp';

// import { ReactComponent as BigVector } from 'images/svg/big_vector.svg';
// import { ReactComponent as SmallVector } from 'images/svg/small_vector.svg';
import {
  SectionTitle,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';

export const Partners = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t('Підприємства групи ЗЗБК №1'),
      content: t(
        'спеціалізуються на: девелопменті, проектуванні, зведенні будівель і споруд зі збірного залізобетону. Власна виробнича база, оснащена сучасним європейським обладнанням.'
      ),
      image: img1,
    },
    {
      title: t('Группа компаній Petrus'),
      content:
        t("об'єднує групу торгово-промислових компаній різних сфер бізнесу - виробнитцва виробів, алкогольних напоїв, с/г продукції, митно-складських послуг, дистрибуції лікеро-горілчаних виробів, косметики, продуктів харчування, транспортних засобів."),
      image: img2,
    },
    {
      title: t('Компанія Світ IT'),
      content:
        t('понад десятків років займається проектами в галузі ІТ. Має велику кількість клієнтів і вендорів, з якими багато років є  партнерами. Працюють з багатьма галузями та індустріями.'),
      image: img3,
    },
    {
      title: t('Підприємство ТОВ «Перший трубний завод»'),
      content:
        t('Має 2000 найменувань продукції.  Виробництво здійснюється на сучасному обладнанні, за новітніми технологіями.'),
      image: img4,
    },
    {
      title: 'Extreme LTD',
      content:
        t('Інжинірінгова компания, займаєтьс розробкою та впровадженням рішень з електропостачання та автоматизації для проектів енергетики, промисловості, нерухомості та будівництва.'),
      image: img5,
    },
  ];

  return (
    <PartnerSection id="partners">
      <PartnerContainer>
        <PartnerTitleGroup $center>
          <SectionTitle>{t('Наші партнери')}</SectionTitle>
          <Subtitle>{t('УКРАЇНСЬКІ КАМПАНІЇ')}</Subtitle>
        </PartnerTitleGroup>
        <PartnerItemContainer>
          {data.map((it, ind) => (
            <PartnerItem key={ind}>
              <PartnerImgWrap>
                <PartnerImg src={it.image} alt={it.title} />
              </PartnerImgWrap>
              <ItemContentContainer>
                <ItemContentTitle>{it.title}</ItemContentTitle>
                <ItemContent>{it.content}</ItemContent>
              </ItemContentContainer>
            </PartnerItem>
          ))}
        </PartnerItemContainer>
      </PartnerContainer>
    </PartnerSection>
  );
};
