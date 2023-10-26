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

export const PracticesModal = ({ onClose, title }) => {
  const practicesDescription = [
    {
      title: 'Корпоративне право',
      list: [
        'Правова допомога в корпоративних правовідносинах.',
        'Створення, ліквідація та перетворення підприємств будь-якої організаційно-правової форми.',
        'Підготовка та проведення зборів учасників/акціонерів.',
        'Створення корпоративних структур із підприємств для реалізації бізнес цілей.',
        'Надання консультацій з ведення зовнішньоекономічної діяльності.',
        'Юридична експертиза зовнішньоекономічних контрактів.',
      ],
    },
    {
      title: 'Податкове право',
      list: [
        'Представлення інтересів перед органами Державної фіскальної служби України, в тому числі їх слідчими та оперативним підрозділами. ',
        'Підготовка відповідей на запити податкових органів, оскарження результатів перевірок та податкових повідомлень-рішень, а також інших рішень податкових органів. ',
        'Захист інтересів в спорах із податковими органами щодо фіктивності господарських відносин та ознак фіктивності компаній – контрагентів.',
        'Правовий аналіз результатів податкових перевірок, оскарження в адміністративному та судовому порядку.',
      ],
    },
    {
      title: 'Кримінальне право',
      list: [
        'Правова допомога адвоката під час досудового слідства, під час взяття під варту та під час будь якої слідчої дії органів досудового слідства.',
        'Правова допомога адвоката під час відбування покарання, звільнення від відбування покарання та зміни умов утримання під вартою.',
      ],
    },
    {
      title: 'Судова практика',
      list: [
        'Представництво в судах всіх рівнів та юрисдикцій (загальні, господарські, адміністративні).',
        'Стягнення дебіторської заборгованості в судовому порядку.',
      ],
    },
  ];
  const practice = practicesDescription.find(item => item.title === title);

  useEffect(() => {
    // closes modal with a click on the Escape
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
        document.querySelector('#modal').classList.add('animated');
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
      onClick={e => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <Modal id="modal">
        <CloseBtn
          size={18}
          aria-label="Close modal"
          onClick={() => onClose()}
        />
        <Heading>
          <SectionTitle>{practice.title}</SectionTitle>
          <Subtitle>працюємо в наступних напрямках:</Subtitle>
        </Heading>
        <List>
          {practice.list.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </List>
        <Connect
          href="#contact"
          aria-label="Зв’язатись з нами"
          onClick={() => onClose()}
        >
          Зв’язатись з нами
        </Connect>
      </Modal>
    </Backdrop>
  );
};

PracticesModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
