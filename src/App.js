import Repetition from "./components/Repetition";
import TokenExample from "./components/TokenExample";
import Buy from "./components/Buy";
import StylesImages from "./components/StylesImages";

function App() {
  return (
    <div className="">
      <div className="flex flex-wrap p-5 w-full justify-around space-x-4 gap-5">
        <Buy />
        <Repetition />
        <StylesImages />
      </div>
      <TokenExample />
    </div>
  );
}

export default App;
