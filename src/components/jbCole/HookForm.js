import { useForm } from "react-hook-form";

const HookForm = () => {
  //we use the register function to register the inputs values, handleSubmit to validate the values, formState-errors
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("data:", data);
  };
  console.log (errors)

  return (
    <div className="flex flex-col mt-4 gap-y-6">
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Name</label>
        <input
          //className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          className={`outline-none border p-2 rounded-lg w-64 ${ errors?.name ? 'border-red-400' : 'border-blue-400 '}`}
          type="text"
          placeholder="Insert your name..."
          {...register("name", { required: true })}
        />
        { errors?.name?.type === 'required' ? <p className="text-sm text-red-400">Name is required</p> : ''}
      </div>
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Email</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="Insert your email..."
          {...register("email", { required: true })}
        />
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Password</label>
        <input
          className={`outline-none border p-2 rounded-lg w-64 ${ errors?.password ? 'border-red-400' : 'border-blue-400 '}`}
          type="text"
          placeholder="type password..."
          {...register("password", { required:true, minLength: 7 })}
        />
           { errors?.password?.type === 'minLength' ? <p className="text-sm text-red-400">At least 7 characters</p> : ''}
           { errors?.password?.type === 'required' ? <p className="text-sm text-red-400">Password is required</p> : ''}
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Profession</label>
        <select
          {...register("profession")}
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
        >
          <option value="0">Select your profession</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>
      </div>

      <div className="checkbox-group flex  gap-x-2 mx-auto">
        <input
          //className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="checkbox"
          name="privacy-policy"
          {...register("privacyTerms")}
        />
        <label> I agree with the privacy terms</label>
      </div>

      {/* <button
        className="w-fit px-4 py-2 bg-red-500 rounded-lg mx-auto font-semibold"
        onClick={onSubmit}
      >
        Submit
      </button> */}

      {/* we use handleSubmit will receive as an entry parameter the function we want to execute if the if our form is validate: */}

      <button
        className="w-fit px-4 py-2 bg-red-500 rounded-lg mx-auto font-semibold"
        onClick={() => handleSubmit(onSubmit)()}
      >
        Create account
      </button>
    </div>
  );
};
export default HookForm;
