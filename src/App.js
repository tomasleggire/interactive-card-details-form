import '../src/CSS/App.css';
import useCardForm from './HOOKS/useCardForm';
import Cards from './COMPONENTS/Cards';
import Form from './COMPONENTS/Form';

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
        <Form
          setState={setState}
        />
      </div>
    </div>
  );
}

export default App;
