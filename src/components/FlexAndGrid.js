import React from "react";

const FlexAndGrid = () => {
  return (
    <>
      <div className="p-5 text-center">
        <h1 className="text-2xl pb-2 "> Testing flex </h1>
        <div className="pt-5 flex justify-center gap-5 flex-wrap">
          <div className="bg-gray-200 w-[150px] min-w-[100px] aspect-square rounded-xl flex justify-center items-center">
            container 1
          </div>
          <div className="bg-gray-200 w-[150px] min-w-[100px] aspect-square rounded-xl flex justify-center items-center">
            container 2
          </div>
          <div className="bg-gray-200 w-[150px] min-w-[100px] aspect-square rounded-xl flex justify-center items-center">
            container 3
          </div>
          <div className="bg-gray-200 w-[150px] min-w-[100px]  aspect-square rounded-xl flex justify-center items-center">
            container 4
          </div>
          <div className="bg-gray-200 w-[150px] min-w-[100px]  aspect-square rounded-xl flex justify-center items-center">
            container 5
          </div>
        </div>
      </div>
      {/*-----------------------------------------------Grid-------------------------------------*/}
      <div className="p-5 text-center">
        <h1 className="text-2xl pb-2"> Testing grid </h1>
        <div className="w-full">
          <div
            className="grid gap-2 max-w-4xl mx-auto"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            }}
          >
            <div className="bg-gray-200 w-[150px] min-w-[100px] aspect-square rounded-xl flex justify-center items-center mx-auto">
              container 1
            </div>
            <div className="bg-gray-200 w-[150px] min-w-[100px] aspect-square rounded-xl flex justify-center items-center mx-auto">
              container 2
            </div>
            <div className="bg-gray-200 w-[150px] min-w-[100px] aspect-square rounded-xl flex justify-center items-center mx-auto">
              container 3
            </div>
            <div className="bg-gray-200 w-[150px] min-w-[100px]  aspect-square rounded-xl flex justify-center items-center mx-auto">
              container 4
            </div>
            <div className="bg-gray-200 w-[150px] min-w-[100px]  aspect-square rounded-xl flex justify-center items-center mx-auto">
              container 5
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexAndGrid;
