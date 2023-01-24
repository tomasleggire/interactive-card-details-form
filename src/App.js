import '../src/CSS/App.css';
import bgDesktop from '../src/IMAGES/bg-main-desktop.png';

function App() {
  return (
    <div className='app-main'>
      <div className='img-back-desktop'>
        <img src={bgDesktop} />
      </div>
    </div>
  );
}

export default App;
