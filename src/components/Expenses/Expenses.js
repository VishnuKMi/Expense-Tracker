import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses (props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const clickYearHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredByYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          defaultYear={filteredYear}
          onClickYear={clickYearHandler}
        />
        <ExpensesChart expenses={filteredByYear} />
        <ExpensesList items={filteredByYear} />
      </Card>
    </div>
  )
}

export default Expenses
