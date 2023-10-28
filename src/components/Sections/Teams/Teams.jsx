import {
  SectionTitle,
  Subtitle,
  TitleGroup,
} from 'components/baseStyles/CommonStyle.styled';
import {
  TeamContainer,
  TeamsList,
  TeamsListItem,
  TeamsListItemText,
  TeamsSection,
} from './Teams.styled';
import { useTranslation } from 'react-i18next';

export const Teams = () => {
  const { t } = useTranslation();

  return (
    <TeamsSection id="team">
      <TeamContainer>
        <TitleGroup $center>
          <SectionTitle>{t('Команда')}</SectionTitle>
          <Subtitle>{t('Досвідчених професіоналів')}</Subtitle>
        </TitleGroup>
        <TeamsList>
          <TeamsListItem>
            <TeamsListItemText>
              {t(
                'Адвокати колегії мають багатий досвід роботи в сфері корпоративних взаємовідносин. Деякі з них є колишніми працівниками великих та малих бізнесів із розвинутими корпоративними структурами.'
              )}
            </TeamsListItemText>
          </TeamsListItem>
          <TeamsListItem>
            <TeamsListItemText>
              {t(
                'Наші адвокати спеціалізуються на створенні та управлінні розвинутих корпоративних структур. Члени адвокатського об’єднання постійно приймають участь в проведенні загальних зборів учасників/акціонерів.'
              )}
            </TeamsListItemText>
          </TeamsListItem>
          <TeamsListItem>
            <TeamsListItemText>
              {t(
                'Наші спеціалисти мають досвід в судових процесах, які проводяться по правилах господарського та адміністративного судочинства.'
              )}
            </TeamsListItemText>
          </TeamsListItem>
          <TeamsListItem>
            <TeamsListItemText>
              {t(
                'Члени Колегії адвокатів постійно приймають участь в семінарах з підвищення кваліфікації. Тому, як на практиці, так і в теорії обізнані в процесуальних правах та обов’язках учасників судового процесу.'
              )}
            </TeamsListItemText>
          </TeamsListItem>
        </TeamsList>
      </TeamContainer>
    </TeamsSection>
  );
};
