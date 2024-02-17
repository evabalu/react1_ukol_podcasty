import { createRoot } from 'react-dom/client';
import './global.css';
import { Episode } from './Episode/episode';
import { episodes } from './podcasty';

const App =()=> (
  <>
    <h1>Epizódy podcastu:</h1>
    <ul className='Episode'>
      {episodes.map((episode) =>(
        <Episode
          key={episode.num}
          num={episode.num}
          title={episode.title}
          guest={episode.guest}
        />
      ))}
    </ul>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);
