import React from 'react';

const TodoForm = ({ input, inputHandler, addTodoHandler }) => {
  return (
    <div>
      <input onChange={inputHandler} value={input} />
      <button onClick={addTodoHandler}>ADD</button>
    </div>
  );
};




export default TodoForm;