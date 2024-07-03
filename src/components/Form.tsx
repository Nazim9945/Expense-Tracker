
import { useForm } from 'react-hook-form';
import categories from '../service.ts/categories';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'




const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "3 character must have at least" })
    .max(20, { message: "max char is 100." }),
  amount: z
    .number({ invalid_type_error: "Amount is Required." })
    .min(1.0, { message: "Min amount should be $1" })
    .max(200.0, { message: "Maximum amount is $200" }),
  category: z.enum(categories,{
    errorMap:()=>({message:"Categories is required"})
  })
});
type Formdata=z.infer<typeof Schema>
interface Props{
    onAdd:(expense:Formdata)=>void
}

const Form = ({onAdd}:Props) => {
    const{register,handleSubmit,formState:{errors},reset}=useForm<Formdata>({resolver:zodResolver(Schema)});
   
  
    
  return (
    <>
      <form onSubmit={handleSubmit(data=>{
        onAdd(data)
        reset()
      }
      )}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="text"
            className="form-control"
            id="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categories
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form