import {
  SectionTitle,
} from 'components/baseStyles/CommonStyle.styled';
import {
  TeamContainer,
  TeamsList,
  TeamsListItem,
  TeamsListItemText,
  TeamsSection,
  TeamsSubtitle,
} from './Teams.styled';

export const Teams = () => {
  return (
    <TeamsSection id='team'>
      <TeamContainer>
        <SectionTitle>команда</SectionTitle>
        <TeamsSubtitle>Досвідчених професіоналів</TeamsSubtitle>

        <TeamsList>
          <TeamsListItem>
            <TeamsListItemText>
              Адвокати колегії мають багатий досвід роботи в сфері корпоративних
              взаємовідносин. Деякі з них є колишніми працівниками великих та
              малих бізнесів із розвинутими корпоративними структурами.
            </TeamsListItemText>
          </TeamsListItem>
          <TeamsListItem>
            <TeamsListItemText>
              Наші адвокати спеціалізуються на створенні та управлінні
              розвинутих корпоративних структур. Члени адвокатського об’єднання
              постійно приймають участь в проведенні загальних зборів
              учасників/акціонерів.
            </TeamsListItemText>
          </TeamsListItem>
          <TeamsListItem>
            <TeamsListItemText>
              Наші спеціалисти мають досвід в судових процесах, які проводяться
              по правилах господарського та адміністративного судочинства.
            </TeamsListItemText>
          </TeamsListItem>
          <TeamsListItem>
            <TeamsListItemText>
              Члени Колегії адвокатів постійно приймають участь в семінарах з
              підвищення кваліфікації. Тому, як на практиці, так і в теорії
              обізнані в процесуальних правах та обов’язках учасників судового
              процесу.
            </TeamsListItemText>
          </TeamsListItem>
        </TeamsList>
      </TeamContainer>
    </TeamsSection>
  );
};
