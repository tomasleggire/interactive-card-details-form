import React, {useState} from 'react';
import '../src/CSS/App.css';
import useCardForm from './HOOKS/useCardForm';
import Cards from './COMPONENTS/Cards';
import Form from './COMPONENTS/Form';
import Complete from './COMPONENTS/Complete';

function App() {

  const [images, state, setState] = useCardForm();

  const [completeValue, setCompleteValue] = useState(false);

  return (
    <div className='app-main'>
      <div className='img-back-desktop' style={{ backgroundImage: `url(${images.bgDesktop})` }}></div>
      <div className='main-content-container'>
        <Cards 
          images={images}
          state={state}
        />
        {!completeValue ?
          <Form
            setState={setState}
            setCompleteValue={setCompleteValue}
          />           :
          <Complete
            images={images}
          />
        }
      </div>
    </div>
  );
}

export default App;
