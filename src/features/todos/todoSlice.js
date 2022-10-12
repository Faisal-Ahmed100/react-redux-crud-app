import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
  todos: [
    { id: 1, title: "I love bangladesh", author: "faisal" },
    { id: 2, title: "I love bangladesh2", author: "faisal2" },
  ],
};

const todos = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    showTodos: (state) => state,
    addTodos:(state,action)=>{
      state.todos.push(action.payload)
    },
    deleteTodos:(state,action)=>{
      const id=action.payload;
      state.todos=state.todos.filter((dta)=> dta.id !== id)
    },
    updateTodos:(state,action)=>{
      const {id,title,author}=action.payload;
      const existingTodos=state.todos.filter((i)=>i.id === id);
      if(existingTodos){
        existingTodos[0].title=title;
        existingTodos[0].author=author;
      }
    }
  },
});

export const { showTodos,addTodos,deleteTodos, updateTodos } = todos.actions;
export default todos.reducer;
