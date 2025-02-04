import { useState } from "react"
import ExpenseList from "./components/ExpenseList"
import DropDownList from "./components/DropDownList";
import Form from "./components/Form";


const App = () => {
  const [category,setCategory]=useState('');
  const [Expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 2, category: "Utility" },
    { id: 2, description: "aaa", amount: 2, category: "Utility" },
    { id: 3, description: "aaa", amount: 2, category: "Utility" },
    { id: 4, description: "aaa", amount: 2, category: "Groceries" },
    { id: 5, description: "aaa", amount: 2, category: "Utility" },
  ]);
  const filteredExpense=category?Expenses.filter(exp=>exp.category===category):Expenses
  // const Addinexpense=(expense:any)=>(
  //     setExpenses([...Expenses,{...expense,id:Expenses.length+1}])
  // ) or can directely set while recieving prop
  return (
    <div className="w-50  mx-auto m-3">
      <Form
        onAdd={(expense) =>
          setExpenses([...Expenses, { ...expense, id: Expenses.length + 1 }])
        }
      />
      <DropDownList onSelectCategory={(category) => setCategory(category)} />
      <ExpenseList
        onDelete={(id) =>
          setExpenses(Expenses.filter((expense) => id !== expense.id))
        }
        expenses={filteredExpense}
      />
    </div>
  );
}

export default App