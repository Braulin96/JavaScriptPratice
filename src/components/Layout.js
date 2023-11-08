import Jackie from "../assets/jackieChan.jpeg";
import Nature from "../assets/nature.jpeg";
import NatureSmall from "../assets/natureSmall.jpeg";

const Layout = () => {
  return (
    <>
      <div className="w-full h-screen flex mx-auto justify-center items-center max-w-6xl">
        <div className="w-full h-[700px]">
          <div
            className="w-full h-full bg-blue-500 bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${Nature})` }}
          >
            <div
              className="w-[800px] py-4 bg-gray-500 p-4 space-x-4 -translate-y-8"
              style={{ boxShadow: "0px 0px 4px 0px white" }}
            >
              <div className="flex justify-between w-full mb-2">
                <p className="my-auto ml-4 uppercase font-semibold text-white">
                  Life Coaching
                </p>
                <div className="flex space-x-6 text-white">
                  <p className="my-auto underline">Menu</p>
                  <p className="my-auto">Login</p>
                  <p className="my-auto">Free Consultations</p>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div
                  className="w-[300px] aspect-square bg-blue-300 bg-center "
                  style={{ backgroundImage: `url(${NatureSmall})` }}
                ></div>
                <div className="flex flex-col justify-center mx-auto py-12 text-white space-y-4">
                  <h1 className="text-3xl uppercase font-semibold mb-4">
                    Front End
                  </h1>
                  <div className="space-y-4">
                    <p className="text-md uppercase text-center">
                      Relationships
                    </p>
                    <p className="text-md uppercase text-center">Family</p>
                    <p className="text-md uppercase text-center">Work</p>
                    <p className="text-md uppercase text-center">Life</p>
                  </div>

                  <button className="border-2 border-gray-200 px-4 py-1 rounded-full mx-auto">
                    Work with me
                  </button>
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
