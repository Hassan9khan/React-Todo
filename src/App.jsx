import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoValue = useRef();
  const addTodo = (event) => {
    event.preventDefault();
    console.log(todoValue.current.value);
    const todoInput = todoValue.current.value.trim()
    if (todoInput === ""){
      alert("Please enter a todo item")
      return;
    } 
    todo.push(todoValue.current.value);
    console.log(todo);
    setTodo([...todo]);

    todoValue.current.value = "";
  };

  function deleteTodo(index) {
    console.log("delete", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  }
  function editTodo(index) {
    console.log("edit", index);
    let value = prompt("Enter the value");
    todo.splice(index, 1, value);
    setTodo([...todo]);
  }


  return (
    <>
      <h1 className="p-5 text-5xl bg-[#28a642] text-white py-7 italic ">
        {" "}
        Todo List
      </h1>
      <form onSubmit={addTodo} className="ml-8 mt-5">
        <h2 className=" text-4xl font-bold italic">Add Items</h2>
        <input
          type="text"
          ref={todoValue}
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs mt-4 italic text-xl"
          required
        />
        <button type="submit" className="btn btn-success  text-white ml-7">
          Submit
        </button>
      </form>

      {todo.length > 0 && <h1 className="text-3xl font-bold m-6 ">Tasks</h1>}

      <ul>
        {todo.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between p-3 border  mx-7">
                <div>
                  <li className="italic text-xl">{item}</li>
                </div>

                <div>
                  <button
                    className="btn btn-sm bg-[#b90000] hover:bg-[#b90000] text-white "
                    onClick={() => deleteTodo(index)}
                  >
                    Delete Todo
                  </button>
                  <button
                    className="btn btn-sm btn-success text-white ml-1"
                    onClick={() => editTodo(index)}
                  >
                    Edit Todo
                  </button>     
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default App;


































































// import { useState } from "react";

// function App() {

//   const [count , setCount] = useState(0)

//   function addCounter(){
//     setCount(count + 1)
//     console.log(count);
//   }

//   function lessCounter(){
//     setCount(count - 1)
//     console.log(count);
//   }

//   return (
//     <>
//       <div className="m-5">
//         <h1 className="text-5xl">Hello Counter</h1>
//         <h3 className="text-3xl m-4">{count}</h3>
//         <button className="btn btn-neutral btn-sm px-7  m-4" onClick={addCounter}>Add</button>
//         <button className="btn btn-neutral btn-sm px-7  m-4" onClick={lessCounter}>Less</button>
//       </div>
//     </>
//   );
// }

// export default App;
