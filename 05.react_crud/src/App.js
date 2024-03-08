import React, {useState} from "react";
import "./App.css";
import Pop from "./components/Pop";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: Date.now(),
      title: "식비",
      cost: 1200,
    }
  ]);
  const [value, setValue] = useState("");
  const [money, setMoney] = useState(0);

  const handleSubmit = (e) => {
    // form 안에서 input 전송시 페이지 reload 막아줌
    e.preventDefault(); 
    
    console.log(value, money);
    // 새로운 할 일 데이터
    let newTodo = {
        id: Date.now(),
        title: value,
        cost: money,
    };

    // 원래 있던 할 일에 새로운 할 일 더하기
    setTodoData(prev =>
        [...prev, newTodo] // prev : 이전 todoData
    );
    setValue("");
    setMoney(0);
  };

  const handleClear = () => {
    setTodoData([]);
  };

  const calculateTotalCost = () => {
    return todoData.reduce((acc, current) => acc + Number(current.cost), 0);
  };

  return (
    <div className="container">
      {/* <Pop /> */}
      <h1>예산 계산기</h1>
      <div className="todoBlock">
        <Form handleSubmit={handleSubmit} 
              value={value} setValue={setValue} 
              money={money} setMoney={setMoney} />
        <List todoData={todoData} setTodoData={setTodoData} />
        <button className="btn" onClick={() => handleClear()}>목록 지우기</button>
      </div>
      <h2 style={{ float: "right"}}>총 지출: {calculateTotalCost()}원</h2>
    </div>
  );
}