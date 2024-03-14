import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col gap-4 p-1 w-full h-[100vh]">
      <div className="text-white">
        <Navbar />
      </div>
      <div className="text-white w-full p-4 flex-1 overflow-x-auto">
        <div className="flex gap-8 min-w-fit h-[100%]">
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
