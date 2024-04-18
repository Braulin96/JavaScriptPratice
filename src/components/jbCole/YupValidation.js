import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name required"),
    email: yup.string().required("Email required"),
    password: yup.string().required("Password required"),
    profession: yup.mixed()
      .required()
      .oneOf(["developer", "designer"])
  })
  .required();

const YupValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex flex-col mt-4 gap-y-6">
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Name</label>
        <input
          //className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          className={`outline-none border p-2 rounded-lg w-64 ${
            errors?.name ? "border-red-400" : "border-blue-400 "
          }`}
          type="text"
          placeholder="Insert your name..."
          {...register("name", { required: true })}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Email</label>
        <input
          //className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          className={`outline-none border p-2 rounded-lg w-64 ${
            errors?.email ? "border-red-400" : "border-blue-400 "
          } `}
          type="text"
          placeholder="Insert your email..."
          {...register("email", {
            required: true,
            //validate: (value) => validator.isEmail(value),
          })}
        />
         <p>{errors.email?.message}</p>
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Password</label>
        <input
          className={`outline-none border p-2 rounded-lg w-64 ${
            errors?.password ? "border-red-400" : "border-blue-400 "
          }`}
          type="password"
          placeholder="type password..."
          {...register("password", { required: true, minLength: 7 })}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Profession</label>
        <select
          {...register("profession")}
          className={`outline-none border p-2 rounded-lg w-64 ${
            errors?.profession ? "border-red-400" : "border-blue-400 "
          }`}
        >
          <option value="0">Select your profession</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>
        <p>{errors.profession?.message}</p>
      </div>

      <div className="checkbox-group flex flex-col gap-x-2 mx-auto">
        <div className="flex gap-x-2">
          <input
            //className="border-blue-400 outline-none border p-2 rounded-lg w-64"
            type="checkbox"
            name="privacy-policy"
            {...register("privacyTerms", { required: true })}
          />
          <label> I agree with the privacy terms</label>
        </div>

        {errors?.privacyTerms?.type === "required" ? (
          <p className="text-sm text-red-400">Agree with terms is required</p>
        ) : (
          ""
        )}
      </div>
      <button
        className="w-fit px-4 py-2 bg-blue-500 rounded-lg mx-auto font-semibold"
        onClick={() => handleSubmit(onSubmit)()}
      >
        Create account
      </button>
    </div>
  );
};
export default YupValidation;


