import { useState } from 'react';
import { PracticesModal } from './PracticesModal/PracticesModal';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import {
  PracticeDesc,
  PracticeTitle,
  PracticesItem,
  PracticesList,
  PracticesSectionTitle,
  PracticeBtn,
} from './Practices.styled';

import { ReactComponent as Hammer } from 'images/svg/streamline_legal.svg';
import { ReactComponent as Arrow } from 'images/svg/arrow.svg';
import { useTranslation } from 'react-i18next';

export const Practices = () => {
  const { t } = useTranslation();

  const practices = [
    {
      title: t('Корпоративне право'),
      description:
        t('Правова допомога при створенні, ліквідації та перетворенні підприємств будь-якої організаційно-правової форми.'),
    },
    {
      title: t('Податкове право'),
      description:
        t('Оптимізація оподаткування. Супровід замовников в процесі вирішення податкових спорів, в тому числі і в судах.',)
    },
    {
      title: t('Кримінальне право'),
      description:
        t('Правова допомога адвоката під час будь якої слідчої дії органів досудового слідства ті під час відбування покарання.'),
    },
    {
      title: t('Судова практика'),
      description:
        t('Представництво в судах всіх рівнів та юрисдикцій (загальних, господарських, адміністративних)'),
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [idModal, setIdModal] = useState(null);
  const toggleModal = () => {
    showModal && document.getElementById('modal').classList.toggle('is-hidden');
    setShowModal(state => !state);
  };

  return (
    <>
      <Section id="practices">
        <Container>
          <PracticesSectionTitle>{t("Практики")}</PracticesSectionTitle>
          <PracticesList>
            {practices.map((practice, i) => (
              <PracticesItem key={i}>
                <Hammer size={24} />
                <div>
                  <PracticeTitle>{practice.title}</PracticeTitle>
                  <PracticeDesc>{practice.description}</PracticeDesc>
                </div>
                <PracticeBtn
                  type="button"
                  aria-label={t("Подробиці")}
                  onClick={e => {
                    toggleModal();
                    setIdModal(e.currentTarget.dataset.id);
                  }}
                  data-id={practice.title}
                >
                  <span>{t("Подробиці")}</span> <Arrow size={10} />
                </PracticeBtn>
              </PracticesItem>
            ))}
          </PracticesList>
        </Container>
      </Section>
      {showModal && <PracticesModal onClose={toggleModal} title={idModal} />}
    </>
  );
};
