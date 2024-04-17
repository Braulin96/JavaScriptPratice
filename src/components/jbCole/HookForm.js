const HookForm = () => {
  const onSubmit = () => {};

  return (
    <div className="flex flex-col mt-4 gap-y-6">
      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Name</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="Insert your name..."
        />
        <p> Input name</p>
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Email</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="Insert your email..."
        />
        <p>Email</p>
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Password</label>
        <input
          className="border-blue-400 outline-none border p-2 rounded-lg w-64"
          type="text"
          placeholder="type password..."
        />
        <p>Email</p>
      </div>

      <div className="form-group flex flex-col gap-y-2 mx-auto">
        <label>Profession</label>
        <select className="border-blue-400 outline-none border p-2 rounded-lg w-64">
          <option value="0">Select your profession</option>
          <option value="1">Developer</option>
          <option value="2">Designer</option>
        </select>
      </div>

      <button className="w-fit px-4 py-2 bg-red-500 rounded-lg mx-auto font-semibold" onClick={onSubmit}>Submit</button>
    </div>
  );
};
export default HookForm;
