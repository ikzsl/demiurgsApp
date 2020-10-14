import dead from '../img/dead.png';
import live from '../img/live.png';
import life from '../img/life.png';

const itemTypes = {
  dead: {
    image: dead,
    bgcolor: ['#0d658a', '#b0ffb4'],
    border: true,
    shadow: true,
    title: 'Мёртвая',
    subtitle: 'или прикидывается',
  },
  live: {
    image: live,
    bgcolor: ['#ffb800', '#fff7b0'],
    border: false,
    shadow: false,
    title: 'Живая',
    subtitle: 'и шевелится!',
  },
  life: {
    image: life,
    bgcolor: ['#ad00ff', '#ffb0e9'],
    border: false,
    shadow: false,
    title: 'Жизнь',
    subtitle: 'Ку-ку!',
  },
};

export default itemTypes;
