interface Expenses{
    id:number,
    description:string,
    category:string,
    amount:number
}
interface Props{
    expenses:Expenses[],
    onDelete:(id:number)=>void
}
const ExpenseList = ({expenses,onDelete}:Props) => {
    if(!expenses.length) return <p className="danger">No item present at this moment!!</p>
  return (
    <table className="table bordered">
      <thead>
        <th>Description</th>
        <th>Amount</th>
        <th>category</th>
        <th></th>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
                <button onClick={()=>onDelete(expense.id)}className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
            <td>Total</td>
            <td>${expenses.reduce((acc,expense)=>acc+expense.amount,0).toFixed(2)}</td>
            <td></td>
            <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList