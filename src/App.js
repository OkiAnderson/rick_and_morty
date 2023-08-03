import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Deatil from './components/Deatil';
import Form from './components/Form/Form';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';



const URL_BASE = 'https://rickandmortyapi.com/api/character';
const API_KEY = 'henrym-okianderson';


function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]); // como useState retorna un array, porque ahi estan los personajes, usamos destructuring con corchetes
   // Id que llega por parametro es mi estado local (lo que escribe el usuario en el input)
   const [access, setAccess] = useState('false')


   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
      character.id !== Number(id) )
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
         
         <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='/detail/:id' element={<Deatil/>}/>
         </Routes>


      </div>
   );
}

export default App;
