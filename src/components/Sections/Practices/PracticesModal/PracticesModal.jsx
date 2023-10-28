import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  SectionTitle,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';
import {
  Backdrop,
  CloseBtn,
  Connect,
  Heading,
  Item,
  List,
  Modal,
} from './PracticesModal.styled';
import { useTranslation } from 'react-i18next';

export const PracticesModal = ({ onClose, title }) => {
  const { t } = useTranslation();

  const practicesDescription = [
    {
      title: t('Корпоративне право'),
      list: [
        t('Правова допомога в корпоративних правовідносинах.'),
        t('Створення, ліквідація та перетворення підприємств будь-якої організаційно-правової форми.'),
        t('Підготовка та проведення зборів учасників/акціонерів.'),
        t('Створення корпоративних структур із підприємств для реалізації бізнес цілей.'),
        t('Надання консультацій з ведення зовнішньоекономічної діяльності.'),
        t('Юридична експертиза зовнішньоекономічних контрактів.'),
      ],
    },
    {
      title: t('Податкове право'),
      list: [
        t('Представлення інтересів перед органами Державної фіскальної служби України, в тому числі їх слідчими та оперативним підрозділами.'),
        t('Підготовка відповідей на запити податкових органів, оскарження результатів перевірок та податкових повідомлень-рішень, а також інших рішень податкових органів.'),
        t('Захист інтересів в спорах із податковими органами щодо фіктивності господарських відносин та ознак фіктивності компаній – контрагентів.'),
        t('Правовий аналіз результатів податкових перевірок, оскарження в адміністративному та судовому порядку.'),
      ],
    },
    {
      title: t('Кримінальне право'),
      list: [
        t('Правова допомога адвоката під час досудового слідства, під час взяття під варту та під час будь якої слідчої дії органів досудового слідства.'),
        t('Правова допомога адвоката під час відбування покарання, звільнення від відбування покарання та зміни умов утримання під вартою.'),
      ],
    },
    {
      title: t('Судова практика'),
      list: [
        t('Представництво в судах всіх рівнів та юрисдикцій (загальні, господарські, адміністративні).'),
        t('Стягнення дебіторської заборгованості в судовому порядку.'),
      ],
    },
  ];
  const practice = practicesDescription.find(item => item.title === title);

  useEffect(() => {
    // closes modal with a click on the Escape
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // removes all event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Backdrop
      id="modal"
      onClick={e => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <Modal>
        <CloseBtn
          size={18}
          aria-label="Close modal"
          onClick={() => onClose()}
        />
        <Heading>
          <SectionTitle>{practice.title}</SectionTitle>
          <Subtitle>{t("працюємо в наступних напрямках:")}</Subtitle>
        </Heading>
        <List>
          {practice.list.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </List>
        <Connect
          href="#contact"
          aria-label={t("Зв’язатись з нами")}
          onClick={() => onClose()}
        >
          {t("Зв’язатись з нами")}
        </Connect>
      </Modal>
    </Backdrop>
  );
};

PracticesModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
