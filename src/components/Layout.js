import Jackie from "../assets/jackieChan.jpeg";

const Layout = () => {
  return (
    <div className="w-full">
      <div className="">
        <h2 className="text-xl font-bold mb-4">Layout Images</h2>
        <div
          className="w-96 h-96 bg-cover  bg-center bg-green-200  rounded-md flex items-center"
          style={{ backgroundImage: `url(${Jackie})` }}
        >
          <div className="w-96 h-52 bg-green-500 flex items-center ">
            <div className="w-40 h-40 bg-center"style={{ backgroundImage: `url(${Jackie})` }} >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
