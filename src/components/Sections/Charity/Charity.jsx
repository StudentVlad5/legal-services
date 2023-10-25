import {
  CharitySection,
  CharityContainer,
  CharityContentContainer,
  CharitySubtitle,
  CharityImgContainer,
  CharityImg,
  CharityImgPhone,
  ItemContentTitle
} from './Charity.styled';
import Mather_2 from "../../../images/charity/mother_2x.webp";
import PlaceholderImage from "../../../images/charity/mother_1x.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Charity = () => {
  return (
    <CharitySection id="charity">
      <CharityContainer>
        <CharityImgContainer>
            <CharityImgPhone/>
            <CharityImg>
              <LazyLoadImage src={Mather_2}
              PlaceholderSrc={PlaceholderImage}
              alt="Image Charity"
              effect="blur"
              />
            </CharityImg>
        </CharityImgContainer>
        <CharityContentContainer>
          <CharitySubtitle>Charity</CharitySubtitle>
          <ItemContentTitle>ПІДЗАГОЛОВОК</ItemContentTitle>
        </CharityContentContainer>
      </CharityContainer>
    </CharitySection>
  );
};
