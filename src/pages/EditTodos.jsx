import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addTodos, updateTodos } from "../features/todos/todoSlice";

const EditTodos = () => {
  const location=useLocation();  
  const [id,setId]=useState(location.state.id);
  const [title,setTitle]=useState(location.state.title);
  const [author,setAuthor]=useState(location.state.author);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateTodos({id,title,author}));
    navigate('/',{replace:true})

  }
  return (
    <section className="sm:min-h-[71vh] h-[77vh]">
      <div className="container mx-auto">
      <h2 className="text-4xl my-6 text-center">Update Todos</h2>
        <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center gap-4 sm:h-[71vh] h-[77vh] p-4 md:w-1/3 w-full mx-auto">
          <div className="w-full">
            <label htmlFor="titleId" className="font-bold">Title : </label>
            <input
              type="text"
              name=""
              id="titleId"
              className="py-2 px-1 border-2 w-full"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label className="font-bold" htmlFor="authorId">Author : </label>
            <input
              type="text"
              id="authorId"
              name=""
              className="py-2 px-1 border-2 w-full"
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
              required
            />
          </div>
          <button className="border px-3 py-2 rounded-sm hover:bg-black/50 hover:text-white">Update Todos</button>
        </form>
      </div>
    </section>
  );
};

export default EditTodos;
