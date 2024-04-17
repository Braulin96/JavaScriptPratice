import { useForm } from "react-hook-form";

const HookForm = () => {
  //we use the register function to register the inputs values and handleSubmit to validate the values.
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data:", data);
  };

  return (
    <div className="flex flex-col mt-4 gap-y-6">
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Name</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="Insert your name..."
          {...register("name")}
        />
      </div>
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Email</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="Insert your email..."
          {...register("email")}
        />
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Password</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="type password..."
          {...register("password")}
        />
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
