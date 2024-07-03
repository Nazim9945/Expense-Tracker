import categories from "../service.ts/categories"


const DropDownList = () => {
  return (
   <select name="category"  className="form-select">
    <option value="">All Category</option>
   {categories.map(category=>(
    <option value={category}>{category}</option>
   ))}
   </select>
  )
}

export default DropDownList