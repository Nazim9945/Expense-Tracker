import categories from "../service.ts/categories"

interface Props{
    onSelectCategory:(category:string)=>void
}
const DropDownList = ({onSelectCategory}:Props) => {
  return (
   <select name="category"  className="form-select" onChange={(e)=>onSelectCategory(e.target.value)}>
    <option value="">All Category</option>
   {categories.map(category=>(
    <option key={category} value={category}>{category}</option>
   ))}
   </select>
  )
}

export default DropDownList