import dead from '../img/dead.png';
import live from '../img/live.png';
import life from '../img/life.png';

const itemTypes = {
  dead: {
    image: dead,
    bgcolor: ['#0D658A', '#B0FFB4'],
    border: true,
    shadow: true,
    title: 'Мертвая',
    subtitle: 'или прикидывается',
  },
  live: {
    image: live,
    bgcolor: ['#FFB800', '#FFF7B0'],
    border: false,
    shadow: false,
    title: 'Живая',
    subtitle: 'и шевелится!',
  },
  life: {
    image: life,
    bgcolor: ['#AD00FF', '#FFB0E9'],
    border: false,
    shadow: false,
    title: 'Жизнь',
    subtitle: 'Ку-ку!',
  },
};

export default itemTypes;
