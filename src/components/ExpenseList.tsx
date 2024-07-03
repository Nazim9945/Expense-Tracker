interface Expenses{
    id:number,
    description:string,
    category:string,
    amount:number
}
interface Props{
    expenses:Expenses[]
}
const ExpenseList = ({expenses}:Props) => {
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
          <tr>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
                <button className="btn btn-outline-danger">Delete</button>
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