// Component :

import React from 'react';                                                   // importing React, so compiler to find.
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';                                 
import Card from './Components/Card';                                       // importing Card component from Card.js file.
import EventHandling from './Components/EventHandling';
import State from './Components/State.jsx';
import State2 from './Components/State2';
import State3 from './Components/State3';
import State4 from './Components/State4';
import State5 from './Components/State5';
import State6 from './Components/State6';
import State7 from './Components/State7';
import State8 from './Components/State8';
import Create from './Components/Create.jsx';
import Props from './Components/Props.jsx';
import PropsPage from './Components/PropsPage.jsx';
import Props1 from './Components/Props1.jsx';
import Props2 from './Components/Props2.jsx';
import Data from './Components/Data.jsx';
import CardMusic from './Components/CardMusic.jsx';
import Navbar from './Components/Navbar.jsx';
import UseRef from './Components/FromHandling/useRef.jsx';
import ControlledComponents from './Components/FromHandling/ControlledComponents.jsx';
import Reacthook from './Components/FromHandling/Reacthook.jsx';
import Practice from './Components/FormHandlingPractice/Practice.jsx';
import Form from './Components/FormHandlingPractice/Form.jsx';

import NavRoute from './Components/NavRoute/NavRoute.jsx';

import API from './Components/API.jsx';

import UseEffect from './Components/UseEffect/UseEffect.jsx';

import Context from './Components/Context/Context.jsx';

function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path="Card" element={<Card />} />
        <Route path="EventHandling" element={<EventHandling />} />
        <Route path="State" element={<State />} />
        <Route path="State2" element={<State2 />} />
        <Route path="State3" element={<State3 />} />
        <Route path="State4" element={<State4 />} />
        <Route path="State5" element={<State5 />} />
        <Route path="State6" element={<State6 />} />
        <Route path="State7" element={<State7 />} />
        <Route path="State8" element={<State8 />} />
        <Route path="Create" element={<Create />} />
        <Route path="PropsPage" element={<PropsPage /> } />
        <Route path="Props" element={<Props /> } />
        <Route path="Props1" element={<Props1 /> } />
        <Route path="Props2" element={<Props2 /> } />
        <Route path="Navbar" element={<Navbar /> } />
        <Route path="CardMusic" element={<CardMusic /> } />
        <Route path="Data" element={<Data /> } />
        <Route path="UseRef" element={<UseRef /> } />
        <Route path="ControlledComponents" element={<ControlledComponents /> } />
        <Route path="Reacthook" element={<Reacthook /> } />
        <Route path="Practice" element={<Practice /> } />
        <Route path="Form" element={<Form /> } />

        <Route path="NavRoute/*" element={<NavRoute /> } />             {/* Use /* as NavRoute is used in another route App.jsx */}

        <Route path="API" element={<API /> } />

        <Route path="UseEffect/*" element={<UseEffect /> } />

        <Route path="Context/*" element={<Context /> } />

        {/* Add more as you create */}
      </Routes>
    </Router>

    </>
  )
}

export default App;                   // exporting the component, to use or apply in another file whenever required.