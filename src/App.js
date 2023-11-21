import Repetition from "./components/Repetition";
import TokenExample from "./components/TokenExample";
import Buy from "./components/Buy";
import StylesImages from "./components/StylesImages";
import FlexAndGrid from "./components/FlexAndGrid";
import Position from "./components/Position";
import Hooks from "./components/Hooks";
import MoreHooks from "./components/MoreHooks";
import Contexts from "./components/Contexts";
import Layout from "./components/Layout";
import TestTypeScript from "./components/shared/typeScript/TestTypeScript";
import StringMethod from "./components/shared/StringMethod";
import ArrayMethod from "./components/shared/ArrayMethod";
import Animation from "./components/shared/Animation";


function App() {
  return (
    <>
   
    {/* <ArrayMethod/> */}
    {/* <StringMethod /> */}
    {/* <TestTypeScript /> */}
    <Layout/>
    {/* <Contexts /> */}
    <MoreHooks />
    <Hooks/>
    <Animation />
    <Position />
      <div className="flex flex-wrap p-5 w-full justify-around space-x-4 gap-5">
        <Buy />
        <Repetition />
        <StylesImages />
      </div>
      <TokenExample />
      <FlexAndGrid />

    
    </>
  );
}

export default App;
