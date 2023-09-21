import Flower from "../assets/flower.png";

//this is a component created to practice styles using tailwind and inline styles
const StylesImages = () => {
  return (
    <div className="p-5 bg-gray-200 w-[500px] min-w-[300px] rounded-2xl">
      <h1 className="text-2xl pb-5">Pass the mouse in the image bellow</h1>
      <img
        style={{ transition: "all 2s ease-in-out" }}
        className="flower w-[400px] aspect-square mx-auto rounded-3xl grayscale-[200%] hover:grayscale-[0]"
        security=""
        src={Flower}
        alt="flower"
      />
    </div>
  );
};

export default StylesImages;
