import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import EventHandling from './Components/EventHandling.jsx';
import { BrowserRouter } from 'react-router-dom';
import Context from './Components/Context/Context.jsx';
import ContextAPI from './utils/ContextAPI.jsx';


createRoot(document.getElementById('root')).render(
<>
       <App /> 

       <ContextAPI>                      {/*  Wrap everything needing context */}
              <Context />                     
       </ContextAPI>


    </>   
 
)
