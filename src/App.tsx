import { useState } from "react"
import ExpenseList from "./components/ExpenseList"


const App = () => {
  const [Expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 2, category: "Utility" },
    { id: 2, description: "aaa", amount: 2, category: "Utility" },
    { id: 3, description: "aaa", amount: 2, category: "Utility" },
    { id: 4, description: "aaa", amount: 2, category: "Groceries" },
    { id: 5, description: "aaa", amount: 2, category: "Utility" },
  ]);
  return (
  <>
    <ExpenseList expenses={Expenses}/>
  </>
  )
}

export default App