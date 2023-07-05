
import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import AddJobOffers from './componentes/AddJobOffer';
import JobOffers from './componentes/JobOffers';
import InfoJobOffer from './componentes/InfoJobOffer';
import { useState } from 'react';
import AddJobOffer from './componentes/AddJobOffer';


function App() {

  const [state, setState] = useState([
    {id: 1, job: "Frontend developer", salary: 3000},
    {id: 2, job: "DevOps", salary: 1500}
  ]);

  const addOffer = (nuevoB) =>{
    state.push(nuevoB);
  };

  const getOffer = (id) =>{
    const filterList = state.filter(item => item.id == id)
    return filterList[0]
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/api/offers/new' element={<AddJobOffer state={state} setState={setState} addOffer={addOffer}></AddJobOffer>}></Route>
        <Route path='/api/offers' element={<JobOffers state={state} setState={setState}></JobOffers>}></Route>
        <Route path='/api/offers/:id' element={<InfoJobOffer state={state} getOffer={getOffer}></InfoJobOffer>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

