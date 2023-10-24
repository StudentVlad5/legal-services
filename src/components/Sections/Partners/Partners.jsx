import { PartnerHeading, PartnerContainer, PartnerSubtitle, PartnerSection, PartnerItemContainer, PartnerItem, PartnerImg, PartnerImgWrap, ItemContentContainer, ItemContentTitle, ItemContent, BackgroundSvgVectorContainer, BackgroundSvgVector } from './Partners.styled';
import img1 from "../../../images/partners/zbk1.webp";
import img2 from "../../../images/partners/petrus.webp";
import img3 from "../../../images/partners/svit_it.webp";
import img4 from "../../../images/partners/ptz.webp";
import img5 from "../../../images/partners/extrime.webp";
import {ReactComponent as BigVector} from "../../../images/svg/big_vector.svg";
import {ReactComponent as SmallVector} from "../../../images/svg/small_vector.svg";

const data = [{
  title:"Підприємства групи ЗЗБК №1",
  content: "спеціалізуються на: девелопменті, проектуванні, зведенні будівель і споруд зі збірного залізобетону. Власна виробнича база, оснащена сучасним європейським обладнанням.",
  image: img1,
},
{ title: "Группа компаній Petrus",
  content: "об'єднує групу торгово-промислових компаній різних сфер бізнесу - виробнитцва виробів, алкогольних напоїв, с/г продукції, митно-складських послуг, дистрибуції лікеро-горілчаних виробів, косметики, продуктів харчування, транспортних засобів.",
  image: img2,
},
{ title:"Компанія Світ IT",
  content: "понад десятків років займається проектами в галузі ІТ. Має велику кількість клієнтів і вендорів, з якими багато років є  партнерами. Працюють з багатьма галузями та індустріями.",
  image: img3,
},
{ title:"Підприємство ТОВ «Перший трубний завод»",
  content: "Має 2000 найменувань продукції.  Виробництво здійснюється на сучасному обладнанні, за новітніми технологіями.",
  image: img4,
},
{ title:"Extreme LTD",
  content: "Інжинірінгова компания, займаєтьс розробкою та впровадженням рішень з електропостачання та автоматизації для проектів енергетики, промисловості, нерухомості та будівництва.",
  image: img5,
}
]


export const Partners = () => {
  return (
    <PartnerSection id="partners">
      <PartnerContainer>
        <PartnerSubtitle>Наші партнери</PartnerSubtitle>
        <PartnerHeading>УКРАЇНСЬКІ КАМПАНІЇ</PartnerHeading>
        <PartnerItemContainer>
          {data.map(it=><PartnerItem><PartnerImgWrap><PartnerImg src={it.image} alt={it.title}/></PartnerImgWrap><ItemContentContainer>
            <ItemContentTitle>{it.title}</ItemContentTitle><ItemContent>{it.content}</ItemContent></ItemContentContainer></PartnerItem>)}
        </PartnerItemContainer>
      </PartnerContainer>
      <BackgroundSvgVectorContainer>
        <BackgroundSvgVector/>
        <BackgroundSvgVector>
        <BigVector/>
        </BackgroundSvgVector>
        <BackgroundSvgVector style={{marginTop:"80px"}}>
          <SmallVector/>
        </BackgroundSvgVector>
      </BackgroundSvgVectorContainer>
    </PartnerSection>
  );
};
