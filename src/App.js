import '../src/CSS/App.css';
import useCardForm from './HOOKS/useCardForm';
import Cards from './COMPONENTS/Cards';

function App() {

  const [images] = useCardForm();

  return (
    <div className='app-main'>
      <div className='img-back-desktop' style={{ backgroundImage: `url(${images.bgDesktop})` }}></div>
      <div className='main-content-container'>
        <Cards 
          images={images}
        />
      </div>
    </div>
  );
}

export default App;
