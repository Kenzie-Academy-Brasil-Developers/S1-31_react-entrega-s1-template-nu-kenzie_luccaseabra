import './App.css';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {

  const [listTransactions, setListTransactions] = useState([
    // {
    //   description: 'Salário recebido', type: 'entrada', value: 2500
    // },
    // {
    //   description: 'Conta de luz', type: 'saída', value: -150
    // },
  ])

  const [page, setPage] = useState('LandingPage')



  return (

    <>
      {page === 'LandingPage' ? (
        <LandingPage setPage={setPage}/>
      ) : (
        <HomePage 
          listTransactions={listTransactions}
          setListTransactions={setListTransactions} 
          setPage={setPage}        
        />
      )}
    </>


  );
}

export default App;
