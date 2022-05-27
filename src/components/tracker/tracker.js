import React from 'react'
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import stylesheet from '../tracker/tracker.css'
import { GlobalProvider } from '../context/GlobalState';
import Footer from '../homePage/footer';


function Tracker() {
  return (
    <GlobalProvider>
          <Header/>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
          <Footer/>
    </GlobalProvider>
    
    
  )
}

export default Tracker