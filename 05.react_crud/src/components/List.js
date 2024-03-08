import React, { useCallback } from "react";

export default function List({ todoData, setTodoData }) {
    const divStyle = {
      display: "flex",
      // flexDirection: "column",
      // width: "50%",
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: "15px",
      padding: "10px",
      margin: "10px 0px",
      border: "1px #ccc solid",
    }

    const btnStyle = {
        color: "#fff",
        border: "none",
        margin: "0px 5px",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
    }

    const spanStyle = {
      width: "40px",
    }

    // const getStyle = (completed) => { // 동적으로 변경할 때
    //   return {
    //     padding: "10px",
    //     borderBottom: "1px #ccc dotted",
    //     textDecoration: completed ? "line-through" : "none",
    //   }
    // }

    const handleClick = (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id)
      setTodoData(newTodoData);
    }

    // const handleCompleChange = (id) => {
    //   let newTodoData = todoData.map((data) => {
    //     if (data.id === id) {
    //       data.completed = !data.completed;
    //     }
    //     return data;
    //   });
    //   setTodoData(newTodoData);
    // }

    return (
      <div>
          {todoData.map((data) => ( // key 속성은 unique한 값
          <div style={divStyle} key={data.id}> 
            {/* <input 
              type="checkbox" 
              onClick={() => handleCompleChange(data.id)}
              defaultChecked={false}
              /> */}
            <span style={spanStyle}>{data.title}</span>
            <span style={spanStyle}>{data.cost}</span>
            <div>
              <button 
                style={btnStyle} 
                onClick={() => handleClick(data.id)}>
                  🗑️
              </button>
              <button 
                style={btnStyle} 
                onClick={() => handleClick(data.id)}>
                  ✏️
              </button>
            </div>
          </div>
          ))}
      </div>
    );
}