import Jackie from "../assets/jackieChan.jpeg";
import Nature from "../assets/nature.jpeg";
import NatureSmall from "../assets/natureSmall.jpeg";

const Layout = () => {
  return (
    <>
      <div className="w-full h-screen flex mx-auto justify-center items-center max-w-6xl">
        <div className="w-full h-[700px]">
          <div
            className="w-full h-full bg-blue-500 bg-cover bg-center flex justify-center items-center "
            style={{ backgroundImage: `url(${Nature})` }}
          >
            <div className="w-[800px] py-8 bg-gray-200 p-4 space-x-4 -translate-y-7">
              <div className="flex justify-between w-full ">
                <p className="my-auto ml-4">Life Coaching</p>
                <div className="flex space-x-4">
                  <p className="my-auto">Menu</p>
                  <p className="my-auto">Login</p>
                  <button className="border-2 rounded-full border-green-400 px-4 py-2">
                    Free consultations
                  </button>
                </div>
              </div>
              <div className="flex justify-between w-full">
              <div className="w-[300px] aspect-square bg-blue-300 bg-center " style={{ backgroundImage: `url(${NatureSmall})` }}></div>
                <div className="flex flex-col justify-center mx-auto">
                  <h1 className="text-3xl uppercase font-semibold mb-4">
                    Merifen Coaching
                  </h1>
                  <div className="space-y-2">
                    <p className="text-md uppercase text-center">
                      Relationships
                    </p>
                    <p className="text-md uppercase text-center">Family</p>
                    <p className="text-md uppercase text-center">Work</p>
                    <p className="text-md uppercase text-center">Life</p>
                  </div>
                  <button className="border-2 border-blue-500 px-4 py-2 rounded-full mx-auto mt-6"> Work with me </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
