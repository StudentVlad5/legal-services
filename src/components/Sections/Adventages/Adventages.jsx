import {
  AdvantageSection,
  AdvantageContainer,
  AdvantageSectionTitle,
  AdvantageItemContainer,
  AdvantageItem,
  ItemContentContainer,
  ItemContentTitle,
  ItemContent,
  BackgroundSvgVectorContainer,
  BackgroundSvgVector,
  NumberOfItem,
} from './Adventages.styled';
import { ReactComponent as BigVector } from 'images/svg/big_vector.svg';
import { ReactComponent as SmallVector } from 'images/svg/small_vector.svg';

const data = [
  {
    title: 'ПОШИРЕННИЙ ДОСТУП ДО ІНФОРМАЦІЇ',
    content:
      'Адвокат має низку прав, які надають можливості отримувати додаткову інформацію і матеріали від органів державної влади, місцевого самоврядування, їх посадових і службових осіб тощо. Це значним чином може вплинути на процес реалізації проекту.',
    numberOfItem: 1,
  },
  {
    title: 'УЧАСТЬ ЕКСПЕРТІВ В РЕАЛІЗАЦІЇ ПРОЕКТІВ',
    content:
      'Адвокати, у зв’язку із професійною діяльністю, мають розуміння про експертне середовище з питань, що є предметом проекту, а отже зможуть залучити фахівців, експертів з питань, що потребують спеціальних знань, якщо це буде вимагатися під час реалізації проекту.',
    numberOfItem: 2,
  },
  {
    title: 'КОМПЛЕКСНА ОЦІНКА  ведення проекту',
    content:
      'Саме адвокати, мають професійну можливість комплексної оцінки ведення проекту порівняно з юристами та іншими фахівцями, які не мають досвіду можливого судово-експертного супроводження справ.',
    numberOfItem: 3,
  },
  {
    title: 'СПЕЦІАЛІЗАЦІЯ В РІЗНІХ ГАЛУЗЯХ ПРАВА',
    content:
      'Реалізація проекту вимагає спеціальних знань не в одній в сфері правових відносин. Саме адвокатське об’ єднання, що включає адвокатів, які спеціалізується у різних галузях права, надасть можливість отримати всебічну, та повну оцінку перспектив доцільності проекту та реалізує цей проєкт.',
    numberOfItem: 4,
  },
  {
    title: 'КОНФЕДЕНЦІЙНОСТь ТА БЕЗПЕКА ІНФОРМАЦІЇ',
    content:
      'Вся інформація, яка отримується адвокатами під час здійснення адвокатської діяльності захищена адвокатською таємницею, а адвокати мають Гарантії адвокатської діяльності у відповідності до Законом України «Про адвокатуру та адвокатську діяльність',
    numberOfItem: 5,
  },
];

export const Adventages = () => {
  return (
    <AdvantageSection id="advantages">
      <AdvantageContainer>
        <AdvantageSectionTitle>НАШІ ПЕРВАГИ</AdvantageSectionTitle>
        <AdvantageItemContainer>
          {data.map((it, ind) => (
            <AdvantageItem key={ind}>
              <ItemContentContainer>
                <NumberOfItem>{it.numberOfItem}</NumberOfItem>
                <ItemContentTitle>{it.title}</ItemContentTitle>
                <ItemContent>{it.content}</ItemContent>
              </ItemContentContainer>
            </AdvantageItem>
          ))}
        </AdvantageItemContainer>
      </AdvantageContainer>
      <BackgroundSvgVectorContainer>
        <BackgroundSvgVector />
        <BackgroundSvgVector>
          <BigVector />
        </BackgroundSvgVector>
        <BackgroundSvgVector style={{ marginTop: '80px' }}>
          <SmallVector />
        </BackgroundSvgVector>
      </BackgroundSvgVectorContainer>
    </AdvantageSection>
  );
};
