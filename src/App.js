import '../src/CSS/App.css';
import useCardForm from './HOOKS/useCardForm';
import Cards from './COMPONENTS/Cards';

function App() {

  const [images, state, setState] = useCardForm();

  return (
    <div className='app-main'>
      <div className='img-back-desktop' style={{ backgroundImage: `url(${images.bgDesktop})` }}></div>
      <div className='main-content-container'>
        <Cards 
          images={images}
          state={state}
        />
      </div>
    </div>
  );
}

export default App;
