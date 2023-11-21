import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

// Initialize AOS
AOS.init();

const Animation = () => {
  return (
    <div className="p-5">
      <h1>Animation</h1>
      <div className="flex flex-col">
        <label>Button</label>
        <div className="relative w-fit">
          <button className="bg-cyan-500 w-fit px-4 py-1.5 rounded-full text-white font-semibold border border-gray-200 hover:bg-cyan-700 transition ease-in-out delay-75 duration-500">
            Anime
          </button>
          <span class="absolute -top-1 right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-600"></span>
          </span>
        </div>
        <div data-aos="fade-right" className="w-20 aspect-square bg-green-400 rounded-sm "> jdjds</div>
        <div className='bg-red-300 w-20 aspect-square' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"></div>
      </div>
    </div>
  );
};
export default Animation;
