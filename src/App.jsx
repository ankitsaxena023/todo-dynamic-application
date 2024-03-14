import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("boards")) || [
      {
        id: Date.now() + Math.random() * 2,
        title: "To do",
        cards: [
          {
            id: Date.now() + Math.random(),
            title: "Card 1",
            date: "",
          },
        ],
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });

  const addCard = (title, boardId) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      date: "",
    };

    const index = boards.findIndex((item) => item.id === boardId);
    if (index < 0) return;
    const pushedBoard = [...boards];
    pushedBoard[index].cards.push(card);
    setBoards(pushedBoard);
  };

  const addBoard = (title) => {
    if (!title) return;
    setBoards([
      ...boards,
      { id: Date.now() + Math.random(), title, cards: [] },
    ]);
  };

  const handleDragEnd = (cid, bid) => {
    let s_cid, s_bid, t_cid, t_bid;

    s_bid = boards.findIndex((item) => item.id === bid);
    if (s_bid < 0) return;

    s_cid = boards[s_bid].cards?.findIndex((item) => item.id === cid);
    if (s_cid < 0) return;

    t_bid = boards.findIndex((item) => item.id === target.bid);
    if (t_bid < 0) return;

    t_cid = boards[t_bid].cards?.findIndex((item) => item.id === target.cid);
    if (t_cid < 0) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bid].cards[s_cid];

    tempBoards[s_bid].cards.splice(s_cid, 1);
    tempBoards[t_bid].cards.splice(t_cid, 0, tempCard);

    setBoards(tempBoards);
  };
  console.log("tempBoard", boards);

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  return (
    <div className="flex flex-col gap-4 p-1 w-full h-[100vh]">
      <div className="text-white">
        <Navbar addBoard={(value) => addBoard(value)} />
      </div>
      <div className="text-white w-full p-4 flex-1 overflow-x-auto">
        <div className="flex gap-8 min-w-fit w-full h-[100%]">
          {boards.map((item) => {
            return (
              <Board
                key={item.id}
                board={item}
                addCard={(value) => addCard(value, item.id)}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
