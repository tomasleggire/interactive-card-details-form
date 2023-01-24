import '../src/CSS/App.css';
import useCardForm from './HOOKS/useCardForm';

function App() {

  const [images] = useCardForm();

  return (
    <div className='app-main'>
      <div className='img-back-desktop'>
        <img src={images.bgDesktop} />
      </div>
    </div>
  );
}

export default App;
